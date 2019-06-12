var route = require("express").Router();
const rimraf = require('rimraf');
const path = require('path');
const fs = require('fs');

const onUpload = require('../media/uploader');
const settings = require('../media/settings');

const PATH_SEPARATOR = '/';
const defaultPath = settings.defaultFolder;

route.get('/media/list', (req, res) => {
    let searchPath = defaultPath;
  
    if (req.query.parentPath)
      searchPath += req.query.parentPath;
  
    console.log('Search path: ', searchPath); 
  
    fs.readdir(searchPath, (err, files) => {
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }
  
      const promises = [];
  
      files.forEach(function (file) {
        promises.push(new Promise((resolve, reject) => {
          fs.lstat(searchPath + PATH_SEPARATOR + file, (error, stats) => {
            if (error)
              reject(error);
  
            let fullPath = path.normalize((searchPath + PATH_SEPARATOR + file)).split(path.sep).join('/').slice(defaultPath.length);
            const node = {
              size: stats ? stats.size : null,
              url: stats.isDirectory() ? null : fullPath,
              id: fullPath,
              dir: stats ? stats.isDirectory() : 'idk',
              path: fullPath,
              name: file
            };
  
            resolve(node);
          });
        }));
      });
  
      Promise.all(promises).then(data => {
        res.json(data);
      }).catch(error => {
        res.json(error);
      });
  
    });
  });
  
  route.get('/media/download', (req, res) => {
    if (!req.query.path)
      return;
  
    const downloadPath = defaultPath + req.query.path;
    console.log('Download path: ', downloadPath);
  
    res.download(downloadPath);
  });
  
  route.post('/media/rename', (req, res) => {
    if (!req.query.path || !req.query.newName)
      return;
  
    const renamePath = defaultPath + req.query.path;
    console.log('Rename path: ', renamePath);
  
    let renamedPath = renamePath.split('/');
    renamedPath.pop();
    renamedPath = renamedPath.join('/') + '/' + req.query.newName;
  
    fs.rename(renamePath, renamedPath, function (err) {
      if (err) console.log('ERROR: ' + err);
  
      res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
  });
  
  route.delete('/media/remove', (req, res) => {
    if (!req.query.path)
      return;
  
    const deletePath = defaultPath + req.query.path;
    console.log('Delete path: ', deletePath);
  
    rimraf(deletePath, function () {
      res.send({
        status: '200',
        responseType: 'string',
        response: 'success'
      });
    });
  });
  
  route.get('/media/search', (req, res) => {
    if (!req.query.query)
      return;
  
    const walkDir = (dir, cb) => {
      fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
  
        cb(path.join(dir, f));
  
        if (isDirectory)
          walkDir(dirPath, cb);
      });
    };
  
    const paths = [];
    walkDir(defaultPath, (itemPath) => {
      const stats = fs.statSync(itemPath);
  
      let fullPath = path.normalize(itemPath).split(path.sep);
      const name = fullPath[fullPath.length - 1];
      fullPath = fullPath.join('/').slice(defaultPath.length);
  
      const node = {
        size: stats ? stats.size : null,
        url: stats.isDirectory() ? null : fullPath,
        id: fullPath,
        dir: stats ? stats.isDirectory() : 'idk',
        path: fullPath,
        name: name
      };
  
      if (node.name.includes(req.query.query))
        paths.push(node);
    });
  
    res.json(paths);
  });
  
  route.post('/media/upload', onUpload);
  
  route.post('/media/directory', (req, res) => {
    if (!req.query.dirName)
      return;
  
    const newDirPath = defaultPath + (req.query.parentPath || '') + '/' + req.query.dirName;
    console.log('New dir path: ', newDirPath);
  
    if (!fs.existsSync(newDirPath)) {
      fs.mkdirSync(newDirPath);
  
      res.send({
        status: '200',
        responseType: 'string',
        response: 'success'
      });
    }
  });

module.exports = route;