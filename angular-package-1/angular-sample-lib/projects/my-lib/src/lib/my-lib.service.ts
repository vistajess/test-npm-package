import { Injectable } from '@angular/core';
import { MySecondLibService } from '@jevi_test/my-second-lib';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor(private secondLibService: MySecondLibService) {

    this.secondLibService.sayHi();
  }

  sayHello(name: string): string {
    return `Hello, ${name}!`;
  }
}