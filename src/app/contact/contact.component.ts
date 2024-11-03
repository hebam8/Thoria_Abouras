import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import {FormGroup , FormControl , Validators } from '@angular/forms'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  loader:boolean =true;

  ngOnInit():void{
  setTimeout(()=>{
    this.loader=false;
  },3000);
  }
Form:FormGroup=new FormGroup({
  from_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
  to_name:new FormControl('thoria'),
  from_email:new FormControl(null,[Validators.required,Validators.email]),
  subject:new FormControl(),
  message:new FormControl(),

})

async send(){
  emailjs.init("MPwfNT5j8o54ZkTT3");
 let response = await emailjs.send("service_nppo3hi","template_bco7leo",{
  from_name: this.Form.value.from_name,
  to_name:  this.Form.value.to_name,
  from_email: this.Form.value.from_email,
  subject: this.Form.value. subject,
  message:  this.Form.value. message,
  });
  this.Form.reset();
}

}
