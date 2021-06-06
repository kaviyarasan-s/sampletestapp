import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  isLogin:boolean = true;
  @Input() item;
  @Output() evemit = new EventEmitter();
  constructor(
    private route:Router
  ) { }
  
  ngOnInit(): void {
    this.evemit.emit(this.item);
  }
  
  email = new FormControl('', Validators.required);
  
  loginForm = new FormGroup ({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });
  
  login(){
    
    this.route.navigateByUrl('/home');
  }

  forgotPassword(){
    this.isLogin = false;
  }

  sendEmail(){
    //need to call service to send an email
  }

}
