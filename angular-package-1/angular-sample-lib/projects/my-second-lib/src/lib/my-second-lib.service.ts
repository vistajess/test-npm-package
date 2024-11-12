import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MySecondLibService {

  constructor() { }

  sayHi() {
    console.log("Hi there this is my second test lib");
  }
}
