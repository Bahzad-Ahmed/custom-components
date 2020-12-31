import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
  ];

  constructor() { }

  public getContacts():Array<{id, name, description, email}>{
    return this.contacts;
  }
  public createContact(contact: {id, name, description, email}){
    this.contacts.push(contact);
  }
  public deletecontact(contact:{id, name, description, email}){
    let updatedArray = [];
    for (let el of this.contacts) {
        if (el !== contact) {
            updatedArray.push(el);
        }
    }
    this.contacts = updatedArray;  
  }

}
