import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages:string[] = []
  constructor() { }
  add(text:string){
    this.messages.push(text)
  }
  clear(){
    this.messages = []
  }
}
