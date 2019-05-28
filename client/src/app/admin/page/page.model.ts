import { FormBuilder,Validators, FormGroup } from '@angular/forms';
export class Page
{
    constructor(private fbuilder:FormBuilder){
    }

    buildForm()
   {
     var pageForm:FormGroup = this.fbuilder.group(
       {
        "name":['',[Validators.required]],
        "content":['',[Validators.required]],
        "status":['',[Validators.required]],
        "user_id":[localStorage.getItem('userid'),[Validators.required]],
        "image":['',[Validators.required]],
        "template":['',[Validators.required]],
        "parent_id":['',[Validators.required]],
        "featured":['',[Validators.required]],
        "description":['',[Validators.required]],
        "updated_by":['',[Validators.required]],
        "created_at":[new Date(),[Validators.required]],
        "updated_at":[new Date(),[Validators.required]]
       }
     );

     return pageForm;
   }
}