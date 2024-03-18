import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  navbarOptions = [
    "Extraer colores",
    "Monocromáticos",
    "Iniciar sesion",
    "Registrarse"
  ]

  isDarkTransparentBgOpen: boolean = false;
  menuOpen: boolean = false;

  toggleMenu() {
    this.isDarkTransparentBgOpen = !this.isDarkTransparentBgOpen;
    this.menuOpen = !this.menuOpen;
  }
}
