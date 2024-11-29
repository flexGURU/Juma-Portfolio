import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';

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
    private toastr: ToastrService) 

    {
    this.contactDetails = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      to_name: 'mukuna',

    })
  }

  get formControls(){
    return this.contactDetails.controls
  }



  async submit(){
    console.log(this.contactDetails.value);

    emailjs.init('-H-AP4PFvRyThJ50N')
    let response = await emailjs.send('service_5vq42js', 'template_k1m3qny', {
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
