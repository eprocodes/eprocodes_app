import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestsService } from 'src/app/services/HttpRequestServices';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

interface Message {
  text: string;
  isUser: boolean;
}


@Component({
  selector: 'app-chat',
  templateUrl: 'chat.html',
  styleUrls: ['chat.scss']
})


export class Chat implements OnInit {
    
    constructor( private loadingCtrl: LoadingController, public httpRequest: HttpRequestsService, private router: Router,  public formBuilder: FormBuilder, private alertController: AlertController) {}
    login_form: FormGroup;

    ngOnInit() {
      this.login_form = this.formBuilder.group({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
    }

    messages: Message[] = [];
    newMessage: string = '';
    showLoader:boolean = false;

    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.showLoader = true;
        this.messages.push({ text: this.newMessage, isUser: true });
        var values = {
          "model": "gpt-3.5-turbo",
          "messages": [
            {"role": "system", "content": "You are a helpful assistant."}, 
            {"role": "user", "content": this.newMessage}]
        }
        this.newMessage = '';
        this.httpRequest.CustomPost('https://api.openai.com/v1/chat/completions',values).subscribe(res => {
          if (res != null) {
            console.log(res);
            this.showLoader = false;
            this.messages.push({ text: res.choices[0].message.content, isUser: false });
          }
        },
          err => {
            console.error('this.getDocument error:', err);
            alert(err)
            // this.loading = false;
          });
        
      }
      }
    }