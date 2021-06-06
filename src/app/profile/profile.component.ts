import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isFromCreate: boolean = true;

  constructor(
    private route: Router
  ) {
  }
  
  ngOnInit(): void {
    this.isFromCreate = true;
    // $('.dobpicker').datetimepicker({dateFormat : "yy-mm-dd"});
  }

  profileForm = new FormGroup({
    displayName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    doorNo: new FormControl(''),
    street: new FormControl(''),
    address: new FormControl('')
  });

  goHome() {
    this.route.navigateByUrl("/home");
  }

  goLoginPage() {
    this.route.navigateByUrl("");
  }
}
