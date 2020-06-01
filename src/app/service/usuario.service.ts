import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const URL = 'http://localhost:7777'

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    constructor(private http: HttpClient,
        private router: Router) {
    }
    public login(usuario: Usuario): Observable<any> {
        return this.http.post<any>(`${URL}/logar`, usuario);
    }
}
