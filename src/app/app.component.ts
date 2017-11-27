import { AppModule } from './app.module';
import { ScriptService } from './script.service';
import { Component } from '@angular/core';

//var SystemJS = require('systemjs');
declare var System: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  map(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  name: any;
  arr: any;
  title = 'Angular app';
  data :any;age:any;
  constructor (public script:ScriptService) {
        this.script.load('filepicker','module1','jquery').then(data => {
        console.log('script loaded ',data);
        //all the properties and methods available in the external module will be available inside the 'this' object
        }).catch(error => console.log(error));
  }
}
