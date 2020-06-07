import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyjsService } from '../_services/alertifyjs.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 model: any = {};
 photoUrl: string;
  constructor(public authservice: AuthService, private alertify: AlertifyjsService,
              private router: Router) { }

  ngOnInit() {
    this.authservice.currentPhotoUrl.subscribe( photoUrl => this.photoUrl = photoUrl);
  }
  login(){
     this.authservice.login(this.model).subscribe( next => {
      this.alertify.success('Login Successful!');
     }, error => {
       this.alertify.error(error);
     }, () => {
       this.router.navigate(['/members']);
     });
  }

  loggedIn(){
    return this.authservice.loggedIn();
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // this.authservice.decodedToken = null;
    // this.authservice.currentUser = null;
    this.alertify.message('Logged Out');
    this.router.navigate(['/home']);
  }
}
