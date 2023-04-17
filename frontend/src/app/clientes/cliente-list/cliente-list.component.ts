import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  @Input() clientes: Cliente[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['nome', 'cnpj', 'codigo', 'rua', 'numero', 'cidade', 'actions'];

  constructor() { }

  ngOnInit(): void { }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(cliente: Cliente) {
    this.edit.emit(cliente);
  }

  onDelete(cliente: Cliente) {
    this.remove.emit(cliente);
  }

}
