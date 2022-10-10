import { Component, OnInit, OnDestroy } from '@angular/core';
import { SendMailServiceService } from './shared/services/send-mail-service.service';
import { Subscription } from 'rxjs';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
  }
  
}
