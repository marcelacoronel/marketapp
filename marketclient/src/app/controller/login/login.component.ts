import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Cliente } from '../../model/Cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario:string;
  password:string;
  cliente:Cliente;

  constructor(private loginService:LoginService) {}

  login() {
    this.loginService.login(this.usuario,this.password).subscribe(data => {
      this.cliente = data;
      if(this.cliente!=null){
        alert("usuario autenticado")
      }else {
        alert("usuario No autenticado")
      }
    })
  }

}
