import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';
import { emailJS } from '../../environments/environment.prod';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactDetails: FormGroup

  constructor(
    private fb:FormBuilder, 
    private toastr: ToastrService,
  ) 

    {
    this.contactDetails = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      to_name: 'James Juma Sindani',

    })
  }

  get formControls(){
    return this.contactDetails.controls
  }

  navigate(){
    window.open('https://www.linkedin.com/in/james-juma-sindani/', "_blank")
  }


  async submit(){
    console.log(this.contactDetails.value);

    emailjs.init(emailJS.emailjsconfig.publicKey)
    let response = await emailjs.send(emailJS.emailjsconfig.serviceId, emailJS.emailjsconfig.templateId, {
      from_name: this.contactDetails.value.name,
      to_name: this.contactDetails.value.to_name,
      from_email: this.contactDetails.value.email,
      subject: this.contactDetails.value.subject,
      message: this.contactDetails.value.message
    })

    this.contactDetails.reset();
    this.toastr.success('Email sent succesfully')

  }

  


  


  


}
