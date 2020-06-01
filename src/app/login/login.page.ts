import { UsuarioService } from './../service/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: Usuario;
  logado: Usuario;
  constructor(private router: Router,
    private service: UsuarioService) {
    this.usuario = new Usuario();
  }
  ngOnInit() {
  }
  logar() {
    this.service.login(this.usuario).subscribe(res => {
      // this.logado = res;
      if (res.codigo) {
        // alert(JSON.stringify(this.logado));
        console.log("logou corretamente");
        this.router.navigateByUrl('/hospital');
      } else {
        throw new Error('Problemas ao logar');
      }
    }, error => {
      console.log('erro no login');
      console.log(error.error);
    })
  }
}
