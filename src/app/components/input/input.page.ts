import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  @Input() type: string;
  @Input() placeholder: string;

  constructor() { }

  ngOnInit() {
  }

}
