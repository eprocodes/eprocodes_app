import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestsService } from 'src/app/services/HttpRequestServices';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss']
})
export class Login implements OnInit {
    
    constructor( public httpRequest: HttpRequestsService, private router: Router,  public formBuilder: FormBuilder, private alertController: AlertController) {}
    login_form: FormGroup;
  
    ngOnInit() {
      this.login_form = this.formBuilder.group({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
    }

    onSubmit(values){
      console.log(values);
      this.httpRequest.Post('login',values).subscribe(res => {
        if (res != null) {
          console.log(res);
          this.presentAlert('Login Success','eProCodes welcome you to the App');
          this.router.navigate(["/tabs/tab1"]);
        } else {
          this.presentAlert('Login Failed','Wrong username and password!');
        }
      },
        err => {
          console.error('this.getDocument error:', err);
          alert(err)
          // this.loading = false;
        });
      
    }

    async presentAlert(headerTitle, message) {
      const alert = await this.alertController.create({
        header: headerTitle,
        subHeader: message,
        // message: message,
        buttons: ['OK'],
      });
  
      await alert.present();
    }
}