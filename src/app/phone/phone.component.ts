import { Component, OnInit } from '@angular/core';
import {PhoneService} from './../phone.service';
import { FormBuilder, Validators, FormGroup , ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.sass'],
  providers: [
    PhoneService, FormBuilder
  ]
})
export class PhoneComponent implements OnInit {

  phones = [];

  phoneForm: FormGroup;

  constructor(private phoneService: PhoneService, private formBuilder: FormBuilder) { 
    console.log("Check phones .."+this.phones);
    this.phoneForm = this.formBuilder.group({
      phoneNumber:['',Validators.required]
    })
  }

  populatePhones(){
    this.phones = this.phoneService.getPhoneNumbers();
    
  }

  fetchPhones(){
    console.log(" Hey Madala");
    console.log(this.phoneForm.value.phoneNumber);
  }

  ngOnInit() {
    
    this.populatePhones();
  }

}
