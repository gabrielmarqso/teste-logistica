import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../model/cliente';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {
  form = this.formBuilder.group({
    _id: [''],
    nome: ['', [Validators.required,
    Validators.minLength(5),
    Validators.maxLength(100)]],
    cnpj: ['', [Validators.required]],
    codigo: ['', [Validators.required]],
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: ClienteService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    const cliente: Cliente = this.route.snapshot.data['cliente'];
    this.form.setValue({
      _id: cliente._id,
      nome: cliente.nome,
      cnpj: cliente.cnpj,
      codigo: cliente.codigo,
    });
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Cliente salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar cliente.', '', { duration: 5000 });
  }

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if (field?.hasError('required')) {
      return 'Campo obrigatório';
    }

    if (field?.hasError('minlength')) {
      const requiredLength: number = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength: number = field.errors ? field.errors['maxlength']['requiredLength'] : 200;
      return `Tamanho máximo excedido de ${requiredLength} caracteres.`;
    }

    return 'Campo Inválido';
  }
}
