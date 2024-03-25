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
  multiColorPalettes: string[][] = [];
  monoChromaticPalettes: string[][] = [];

  navbarOptions = [
    "Extraer colores",
    "Monocromáticos",
    "Iniciar sesion",
    "Registrarse"
  ]

  ngOnInit(): void {
    this.initialColorPalette = this.generateColorPalette(5);
    this.generateMultiColorPalettes(this.multiColorPalettes, 6);
  }

  toggleMenu() {
    this.isDarkTransparentBgOpen = !this.isDarkTransparentBgOpen;
    this.menuOpen = !this.menuOpen;
  }

  //Returns an array containing X random ordered colors
  generateColorPalette(numberOfColors: number) {
    let temporaryArray: chroma.Color[] = [];
    let colorsArray: string[] = [];

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
      colorsArray.push(color.hex());
    })

    return colorsArray;
  }

  generateMultiColorPalettes(originalArray: string[][], numberOfColors: number) {
    let temporaryArray: string[] = [];
    for (let i = 0; i < numberOfColors; i++) {
      temporaryArray = this.generateColorPalette(5);

      if (originalArray.includes(temporaryArray)) {
        i--;
        continue;
      }

      originalArray.push(temporaryArray);
      temporaryArray = [];
    }
  }
}
