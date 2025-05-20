import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    HeaderComponent, 
    FooterComponent, 
    SearchComponent,
    PokemonCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokédex Portfolio';
  
  // Sample Pokemon data for demonstration
  samplePokemon = [
    { id: 1, name: 'bulbasaur', types: ['Grass', 'Poison'], imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 4, name: 'charmander', types: ['Fire'], imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 7, name: 'squirtle', types: ['Water'], imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 25, name: 'pikachu', types: ['Electric'], imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' }
  ];
  
  // Handle search
  onSearch(searchTerm: string): void {
    console.log('Searching for:', searchTerm);
    // In a real app, this would filter the Pokemon list
  }
}