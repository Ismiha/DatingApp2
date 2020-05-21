import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyjsService } from '../_services/alertifyjs.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 model: any = {};
  constructor(public authservice: AuthService, private alertify: AlertifyjsService) { }

  ngOnInit() {
  }
  login(){
     this.authservice.login(this.model).subscribe( next => {
      this.alertify.success('Login Successful!');
     }, error => {
       this.alertify.error(error);
     });
  }

  loggedIn(){
    return this.authservice.loggedIn();
  }

  logOut(){
    localStorage.removeItem('token');
    this.alertify.message('Logged Out');
  }
}
