import { Component, signal } from '@angular/core';

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
  public menuItems = signal<MenuItems[]>([
    { title: ' Contador', router: 'counter' },
    { title: ' Usuarios', router: 'user-info' },
    { title: ' Actualizaciones', router: 'properties' },
  ]);
  /*   public mennuItems: MenuItems[] = [
    { title: ' Contador', router: 'Counter' },
    { title: ' Usuarios', router: 'user-info' },
    { title: ' Actualizaciones', router: 'properties' },
  ]; */
}
