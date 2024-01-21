import { Component } from '@angular/core';

interface MenuItems {
  title: string;
  router: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  public mennuItems: MenuItems[] = [
    { title: ' Contador', router: 'Counter' },
    { title: ' Usuarios', router: 'user-info' },
    { title: ' Actualizaciones', router: 'properties' },
  ];
}
