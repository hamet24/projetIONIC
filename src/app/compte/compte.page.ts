import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'compte.page.html',
  styleUrls: ['compte.page.scss']
})
export class Tab3Page {

  constructor(private route: Router) {}



  logout():void{
    window.localStorage.removeItem('token');
    this.route.navigateByUrl('login')
  }
}
