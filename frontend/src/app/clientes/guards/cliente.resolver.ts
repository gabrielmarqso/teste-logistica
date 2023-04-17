import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteResolver implements Resolve<Cliente> {

  constructor(private service: ClienteService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cliente> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ _id: '', codigo: '', nome: '', cnpj: '', endereco: { rua: '', numero: '', bairro: '', cidade: '', estado: '', cep: '', placeid: '' } });
  }
}
