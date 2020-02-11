import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  phones = [
    {number:"7035053647", id:1, name:"Madala" },
    {number:"7035054410", id:2, name:"Yellanki" },
    {number:"7035051000", id:1, name:"Cops" },
    {number:"7035059111", id:1, name:"Emergency" }
  ]
  constructor() { }

  getPhoneNumbers(){
    return this.phones;
  }
  
}
