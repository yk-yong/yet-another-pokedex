import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Navigation links
  navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Pokédex', path: '/pokedex' },
    { title: 'Types', path: '/types' },
    { title: 'About', path: '/about' }
  ];
}