import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'projeto';

  product: any;
  

  constructor() { }

  ngOnInit()
  {
  }

}
