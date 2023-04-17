import { Injectable } from '@angular/core';
import { Cliente, Endereco } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = 'api/clientes';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Cliente[]>(this.API)
      .pipe(
        first(),

      );
  }

  loadById(id: string) {
    return this.httpClient.get<Cliente>(`${this.API}/${id}`);
  }

  save(record: Partial<{ _id: string; nome: string; cnpj: string; codigo: string; endereco: Endereco; }>) {
    // console.log(record);
    if (record._id) {
      // console.log('update');
      return this.update(record);
    }
    // console.log('create');
    return this.create(record);
  }

  create(record: Partial<Cliente>) {
    return this.httpClient.post<Cliente>(this.API, record).pipe(first());
  }

  update(record: Partial<Cliente>) {
    return this.httpClient.put<Cliente>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
