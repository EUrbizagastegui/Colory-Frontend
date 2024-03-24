import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import chroma from "chroma-js";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isDarkTransparentBgOpen: boolean = false;
  menuOpen: boolean = false;
  initialColorPalette: string[] = [];

  navbarOptions = [
    "Extraer colores",
    "Monocromáticos",
    "Iniciar sesion",
    "Registrarse"
  ]

  ngOnInit(): void {
    this.generateColorPalette(this.initialColorPalette, 5);
  }

  toggleMenu() {
    this.isDarkTransparentBgOpen = !this.isDarkTransparentBgOpen;
    this.menuOpen = !this.menuOpen;
  }

  generateColorPalette(colorsArray: string[], numberOfColors: number) {
    let temporaryArray: chroma.Color[] = [];

    for (let i = 0; i < numberOfColors; i++) {
      const color = chroma.random();

      if (temporaryArray.includes(color)) {
        i--;
        continue;
      }

      temporaryArray.push(color);
    }

    temporaryArray.sort((a, b) => {
      const aHslH = a.get('hsl.h');
      const bHslH = b.get('hsl.h');

      return aHslH - bHslH;
    });

    temporaryArray.forEach(color => {
      console.log(color.get('hsl.h'));
      colorsArray.push(color.hex());
    })
  }
}
