import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { SearchComponent } from "./components/search/search.component";
import { PokemonCardComponent } from "./components/pokemon-card/pokemon-card.component";
import { CommonModule } from "@angular/common";
import { Pokemon, PokemonService } from "./services/pokemon.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    SearchComponent,
    PokemonCardComponent,
    FooterComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Pokédex Portfolio";
  samplePokemon: Pokemon[] = [];
  isLoading = true;
  error = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadFeaturedPokemon();
  }

  // Load featured Pokemon (first 4 for the main display)
  async loadFeaturedPokemon(): Promise<void> {
    try {
      this.isLoading = true;
      // Get the first 4 Pokemon for the featured section
      const featuredIds = [1, 4, 7, 25]; // Bulbasaur, Charmander, Squirtle, Pikachu
      
      const pokemonPromises = featuredIds.map(id => 
        this.pokemonService.getPokemon(id)
      );
      
      this.samplePokemon = await Promise.all(pokemonPromises);
      this.error = '';
    } catch (err) {
      console.error("Failed to load featured Pokemon:", err);
      this.error = 'Failed to load Pokémon data. Please try again later.';
    } finally {
      this.isLoading = false;
    }
  }

  // Handle search
  onSearch(searchTerm: string): void {
    console.log("Searching for:", searchTerm);
    if (searchTerm && searchTerm.trim() !== '') {
      this.searchPokemon(searchTerm.toLowerCase());
    } else {
      this.loadFeaturedPokemon();
    }
  }
  
  // Search for a specific Pokemon
  async searchPokemon(searchTerm: string): Promise<void> {
    try {
      this.isLoading = true;
      const pokemon = await this.pokemonService.getPokemon(searchTerm);
      this.samplePokemon = pokemon.id ? [pokemon] : [];
      this.error = this.samplePokemon.length ? '' : 'No Pokémon found with that name or ID.';
    } catch (err) {
      console.error("Error searching for Pokemon:", err);
      this.error = 'Failed to search for Pokémon. Please try again.';
      this.samplePokemon = [];
    } finally {
      this.isLoading = false;
    }
  }
}
