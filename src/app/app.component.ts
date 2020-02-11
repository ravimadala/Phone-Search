import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { PhoneComponent }  from './phone/phone.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [PhoneComponent,FormBuilder]
})
export class AppComponent implements OnInit{
  title = 'phone-search';
  
  constructor(private PhoneComponent: PhoneComponent){

  }

  ngOnInit(){

  }
}
