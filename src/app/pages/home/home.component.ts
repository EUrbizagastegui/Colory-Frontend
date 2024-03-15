import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  start: string = 'Start';
  center: string = 'Center';
  end: string = 'End';
  startType: string = 'button';
  centerType: string = 'h1';
  endType: string = 'button';
}
