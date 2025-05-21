import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokemonService } from "../services/pokemon.service";

interface PokemonListItem {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
}

@Component({
  selector: "app-pokemon-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"],
})
export class PokemonListComponent implements OnInit {
  pokemonList: PokemonListItem[] = [];
  isLoading = true;
  error = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  async loadPokemon(): Promise<void> {
    try {
      this.isLoading = true;
      // Fetch the first 20 Pokémon from the API
      const pokemonData = await this.pokemonService.getPokemonList(20, 0);
      
      // Transform the data to match our component's format
      this.pokemonList = pokemonData.map(pokemon => ({
        id: pokemon.id,
        name: this.capitalize(pokemon.name),
        // Join multiple types with a slash
        type: pokemon.types.join('/'),
        imageUrl: pokemon.imageUrl
      }));
      
      this.error = '';
    } catch (err) {
      console.error("Failed to load Pokemon list:", err);
      this.error = 'Failed to load Pokémon data. Please try again later.';
    } finally {
      this.isLoading = false;
    }
  }

  // Helper function to capitalize the Pokemon name
  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
