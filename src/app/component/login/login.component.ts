import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Service/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean = false;
  form!:FormGroup;
  errorMessage : string = '';

  constructor(private fb:FormBuilder, private authService: AuthService, private router:Router) { 
    this.form = this.fb.group({
      correo : ['',Validators.required],
      clave : ['',Validators.required]
    })
  }


  ngOnInit() {
  }


  public validarLogin():void{
    if (this.authService.login(this.form.value.correo, this.form.value.clave)) {
      this.router.navigate(['/home']);
    }else {
      this.errorMessage = 'Correo o contraseña incorrectas';
    }
  }
}
