import { Component } from '@angular/core';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioRegistroComponent],
  template: `<app-formulario-registro></app-formulario-registro>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
