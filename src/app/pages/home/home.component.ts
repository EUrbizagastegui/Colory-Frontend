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
    this.initialColorPalette = this.generateColorGradientPalette(5);
    this.generateMultiColorPalettes(this.multiColorPalettes, 6);
  }

  toggleMenu() {
    this.isDarkTransparentBgOpen = !this.isDarkTransparentBgOpen;
    this.menuOpen = !this.menuOpen;
  }

  //Returns an array containing X random ordered colors
  generateRandomColorPalette(numberOfColors: number) {
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

  //Returns an array conatining a gradient array of 5 colors between two random colors
  generateColorGradientPalette(numberOfColors: number): string[] {
    const randomNumber = Math.floor(Math.random() * 2);
    const color1 = chroma.random().hex();
    const color2 = chroma.random().hex();
    let colorsArray: string[] = [];

    switch (randomNumber) {
      case 0:
        colorsArray = chroma.scale([color1, color2]).colors(numberOfColors);
        break;
      case 1:
        let color3 = chroma.random().hex();

        do {
          color3 = chroma.random().hex();
        } while (color3 === color1 || color3 === color2);

        colorsArray = chroma.scale([color1, color2, color3]).colors(numberOfColors);
        break;
      default:
        break;
    }

    return colorsArray;
  }

  generateMultiColorPalettes(originalArray: string[][], numberOfColors: number): void {
    let temporaryArray: string[] = [];
    let randomNumber = 0;

    for (let i = 0; i < numberOfColors; i++) {
      //generate a random number that can be 0 or 1
      randomNumber = Math.floor(Math.random() * 2);
      
      switch (randomNumber) {
        case 0:
          temporaryArray = this.generateRandomColorPalette(5);
          break;
        case 1:
          temporaryArray = this.generateColorGradientPalette(5);
          break;
        default:
          break;
      }

      if (originalArray.includes(temporaryArray)) {
        i--;
        continue;
      }

      originalArray.push(temporaryArray);
      temporaryArray = [];
    }
  }
}
