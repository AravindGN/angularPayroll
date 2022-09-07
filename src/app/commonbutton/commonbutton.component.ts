import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commonbutton',
  templateUrl: './commonbutton.component.html',
  styleUrls: ['./commonbutton.component.css']
})
export class CommonbuttonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() buttonName:string = '';
  @Input() link = "";

}
