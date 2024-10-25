import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Menu principal', url: '/', icon: 'home' },
    { title: 'Carrito', url: '/carrito', icon: 'bag' },
    { title: 'Perfil', url: '/perfil', icon: 'person' },
  ];
  constructor() {}
}
