import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from './model/cliente';
import { ProductService } from '../clientes/services/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './services/cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import { ConfirmationDialogComponent } from '../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ClientesComponent implements OnInit {

  clientes$: Observable<Cliente[]> | null = null;

  constructor(
    private clienteService: ClienteService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  ngOnInit(): void { }


  refresh() {
    this.clientes$ = this.clienteService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar clientes.');
          return of([])
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  onEdit(cliente: Cliente) {
    this.router.navigate(['editar', cliente._id], { relativeTo: this.route });
  }

  onRemove(cliente: Cliente) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.clienteService.remove(cliente._id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Cliente removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Erro ao tentar remover cliente.')
        );
      }
    });
  }


}
