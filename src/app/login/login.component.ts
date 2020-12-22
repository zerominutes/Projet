import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username:string="admin";
  password:string="admin";
  constructor(private formBuilder: FormBuilder,
    private router: Router,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }
  onSubmit(){
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
     return;
   }

    const loginData = {
     username: this.loginForm.controls.username.value,
     password: this.loginForm.controls.password.value
   };
   if((loginData.username==this.username)&&(loginData.password==this.password)){
    this.router.navigate(['home']);

   }
  }

}
