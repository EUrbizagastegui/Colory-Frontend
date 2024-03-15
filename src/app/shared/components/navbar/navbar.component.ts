import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() start: string = '';
  @Input() center: string = '';
  @Input() end: string = '';
  @Input() startType: string = '';
  @Input() centerType: string = '';
  @Input() endType: string = '';
}
