import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyjsService {

constructor() { }
 confirm(message: string, okCallback: () => any){
   alertify.message(message, (e: any) => {
     if (e) {
       okCallback();
     }else {}
   });
  }
  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }
  success(message: string) {
    alertify.success(message);
  }

}
