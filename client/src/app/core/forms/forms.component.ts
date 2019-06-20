import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { GlobleService } from 'src/app/services/globle.service';
import { DatashareService } from 'src/app/services/datashare.service';
declare var $,select2,moment,daterangepicker,datepicker;
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
@Input('form') form: any;
@Input('tree') tree:any;
@Output() saveevent= new EventEmitter<any>();
mform:FormGroup;
  constructor(private formb:FormBuilder,private service :GlobleService, private ds:DatashareService) { }

  ngOnInit() {

    var fc={};
    this.form.map(f=>{
      fc[f.name]=['',f.validation];
    });
    if(this.form['fbreak'])
    {
      this.form['fbreak'].map(f=>{
        fc[f.name]=['',f.validation];
      });
    }
    fc['created_at']=[new Date()];
    fc['updated_at']=[new Date()];
    fc['user_id']=[sessionStorage.getItem("userid")];
    fc['updated_by']=[sessionStorage.getItem("userid")];
    this.mform= this.formb.group(fc);

    this.ds.currentdata.subscribe(a=>{
      if(Object.keys(a).length>0){
        this.mform.controls['created_at'].disable({onlySelf:true});
        this.mform.controls['user_id'].disable({onlySelf:true});
        this.form.map(f=>{
          this.mform.controls[f.name].setValue(a[f.name]);
        });
        if(this.form['fbreak'])
        {
          this.form['fbreak'].map(f=>{
            this.mform.controls[f.name].setValue(a[f.name]);
          });
        }

      }
    });

    this.jqueryinit();
  }

  sendMessage() {
    if(this.mform.valid)
    {
    this.saveevent.emit(this.mform.value);
    }
  }

  itemClicked(event,name){
    if(event.type="select"){
      if(!event.node.isFolder)
      {
        this.mform.controls[name].patchValue(event.node.pathToNode);
        $(".close").click();
      }
    }
  }

  gallery(event,name){
    console.log(event);
  }

  selectimages(){

  }

  getImage(name){
    if(this.mform.controls[name].value)
    {
    return this.service.baseurl+this.mform.controls[name].value;
    }
  }

  datechange(event,name){
    console.log(event.target.value);
    this.mform.controls[name].patchValue(event.target.value);
  }

  public files: NgxFileDropEntry[] = [];

  mfiles = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

            var reader = new FileReader();
            reader.onload = ()=>{
              var dataURL = reader.result;
              this.mfiles.push({"name":file.name,"size":file.size,"url":dataURL});
            };
            reader.readAsDataURL(file);

          const formData = new FormData();
          formData.append('gallery', file, droppedFile.relativePath);


        });
      }
    }
  }

  public fileOver(event){
    //console.log(event);
  }

  public fileLeave(event){
   // console.log(event);
  }


  jqueryinit(){
    var _self = this;

    $(()=>{

      $(".autocomplete").each((k,v)=>{
        var tmodel = $(v).attr("type");
        _self.service.getAutocomplete(tmodel,(res)=>{
          $(v).autocomplete({
            source: res
          });
        });
      })

      function split( val ) {
        return val.split( /,\s*/ );
      }
      function extractLast( term ) {
        return split( term ).pop();
      }
      $(".autocompletemulti").each((k,v)=>{
        var tmodel = $(v).attr("type");
        _self.service.getAutocomplete(tmodel,(res)=>{
          $(v).on( "keydown", function( event ) {
            if ( event.keyCode === $.ui.keyCode.TAB &&
                $( this ).autocomplete( "instance" ).menu.active ) {
              event.preventDefault();
            }
          })
          .autocomplete({
            minLength: 0,
            source: function( request, response ) {
              // delegate back to autocomplete, but extract the last term
              response( $.ui.autocomplete.filter(
                res, extractLast( request.term ) ) );
            },
            focus: function() {
              // prevent value inserted on focus
              return false;
            },
            select: function( event, ui ) {
              var terms = split( this.value );
              // remove the current input
              terms.pop();
              // add the selected item
              terms.push( ui.item.value );
              // add placeholder to get the comma-and-space at the end
              terms.push( "" );
              this.value = terms.join( ", " );
              return false;
            }
          });
        });
      });
      //Initialize Select2 Elements
      //$('.select2').select2()

      //Datemask dd/mm/yyyy
      //$('#datemask').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' })
      //Datemask2 mm/dd/yyyy
     // $('#datemask2').inputmask('mm/dd/yyyy', { 'placeholder': 'mm/dd/yyyy' })
      //Money Euro
     // $('[data-mask]').inputmask()

      //Date range picker
      $('#reservation').daterangepicker()
      //Date range picker with time picker
     // $('.datetimepicker').daterangepicker({ timePicker: true, timePickerIncrement: 30, locale: { format: 'MM/DD/YYYY hh:mm A' }})
      //Date range as a button
      $('#daterange-btn').daterangepicker(
        {
          ranges   : {
            'Today'       : [moment(), moment()],
            'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month'  : [moment().startOf('month'), moment().endOf('month')],
            'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          },
          startDate: moment().subtract(29, 'days'),
          endDate  : moment()
        },
        function (start, end) {
          $('#daterange-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
        }
      )

      //Date picker
      $('.datetimepicker').datepicker({
        format:'yyyy-mm-dd',
        autoclose: true
      }).on("change", function(e) {
        _self.mform.controls[e.target.id].patchValue(e.target.value);
    });

      //iCheck for checkbox and radio inputs
      $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass   : 'iradio_minimal-blue'
      })
      //Red color scheme for iCheck
      $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
        checkboxClass: 'icheckbox_minimal-red',
        radioClass   : 'iradio_minimal-red'
      })
      //Flat red color scheme for iCheck
      $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass   : 'iradio_flat-green'
      })

      //Colorpicker
    //  $('.my-colorpicker1').colorpicker()
      //color picker with addon
     // $('.my-colorpicker2').colorpicker()

      //Timepicker
      $('.timepicker').timepicker({
        showInputs: false
      });
      $("#filemanager div button").hide();
      $("#openfilemanager").click(function(e){
        $("#filemanager div button").click();
      });

    })
  }

}
