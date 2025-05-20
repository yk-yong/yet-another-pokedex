import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  imageUrl?: string;
}

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  
  // Default image if none provided
  defaultImage = 'assets/images/pokemon-placeholder.png';
  
  // Get image URL or use default
  get pokemonImage(): string {
    return this.pokemon?.imageUrl || this.defaultImage;
  }
  
  // Format Pokemon ID with leading zeros (e.g., 001, 025)
  formatId(id: number): string {
    return id.toString().padStart(3, '0');
  }
  
  // Capitalize a string (e.g., 'bulbasaur' to 'Bulbasaur')
  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}