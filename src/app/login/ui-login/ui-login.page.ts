import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-login',
  templateUrl: './ui-login.page.html',
  styleUrls: ['./ui-login.page.scss'],
})
export class UiLoginPage implements OnInit {

  constructor(private _rt: Router,
    ) { }

  ngOnInit() {
      //this._rt.navigateByUrl('/home');

  }

  login(){
    this._rt.navigateByUrl('/home)');
  }

  //this._rt.navigateByUrl('/home');
}
