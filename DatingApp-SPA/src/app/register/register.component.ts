import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyjsService } from '../_services/alertifyjs.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService, private alertify: AlertifyjsService) { }

  ngOnInit() {
  }
  register(){
    this.authService.register(this.model).subscribe(() => {
    this.alertify.success('Registration is successful!');
    },
    errors => {
      this.alertify.error('Error registration');
    });
  }
  cancel(){
    this.cancelRegister.emit(false);
    this.alertify.warning('Cancelled!');
  }

}
