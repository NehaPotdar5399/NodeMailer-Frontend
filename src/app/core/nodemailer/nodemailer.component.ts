import { Component, OnInit } from '@angular/core';
import { SendMailServiceService } from 'src/app/shared/services/send-mail-service.service';
import { Subscription } from 'rxjs';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';


@Component({
  selector: 'app-nodemailer',
  templateUrl: './nodemailer.component.html',
  styleUrls: ['./nodemailer.component.scss']
})
export class NodemailerComponent implements OnInit {

  public subscription: Subscription;
  constructor(private sendmailservice: SendMailServiceService,
              private fb: FormBuilder) { }

  infoForm = this.fb.group({
    subject: ['', [
      Validators.required,
      Validators.minLength(3)
    ]
    ],
    email: ['', [
      Validators.required,
      Validators.email
    ]
    ],
    body:['',[
      Validators.required,
      Validators.minLength(1)
    ]]
  });

  get subject() { return this.infoForm.get('subject'); }
  get email() { return this.infoForm.get('email'); }
  get body(){return this.infoForm.get('body');}


  sendMail() {
    console.log(this.infoForm.value);
    this.subscription = this.sendmailservice.sendEmail(this.infoForm.value).
    subscribe(data => {
      let msg = data['message']
      alert(msg);
      // console.log(data, "success");
    }, error => {
      console.error(error, "error");
    } );
  }

  ngOnInit() {
  }

}
