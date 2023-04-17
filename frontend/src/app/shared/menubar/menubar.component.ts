import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/clientes'
        ,

      },
      {
        label: 'Mapa',
        icon: 'pi pi-fw pi-map',
        routerLink: '/clientes/mapa'
      },
    ];
  }
}
