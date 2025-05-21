import { Injectable } from "@angular/core";

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  imageUrl: string;
}

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  private baseUrl = "https://pokeapi.co/api/v2";

  /**
   * Fetches a list of Pokemon from the API
   * @param limit Number of Pokemon to fetch (default: 20)
   * @param offset Starting index (default: 0)
   * @returns Promise with an array of Pokemon
   */
  async getPokemonList(limit = 20, offset = 0): Promise<Pokemon[]> {
    try {
      // Fetch the initial list of Pokemon
      const response = await fetch(
        `${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`
      );
      
      if (!response.ok) {
        throw new Error(`Failed to fetch Pokemon list: ${response.status}`);
      }
      
      const data = await response.json();
      
      // For each Pokemon in the list, fetch its detailed information
      const pokemonDetailsPromises = data.results.map(
        (pokemon: { name: string; url: string }) => this.getPokemon(pokemon.name)
      );
      
      // Wait for all Pokemon details to be fetched
      return await Promise.all(pokemonDetailsPromises);
    } catch (error) {
      console.error("Error fetching Pokemon list:", error);
      return [];
    }
  }

  /**
   * Fetches details for a specific Pokemon
   * @param nameOrId Name or ID of the Pokemon
   * @returns Promise with the Pokemon data
   */
  async getPokemon(nameOrId: string | number): Promise<Pokemon> {
    try {
      const response = await fetch(`${this.baseUrl}/pokemon/${nameOrId}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch Pokemon ${nameOrId}: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Transform API data to match our Pokemon interface
      return {
        id: data.id,
        name: data.name,
        types: data.types.map((type: { type: { name: string } }) => 
          this.capitalize(type.type.name)
        ),
        imageUrl: data.sprites.other["official-artwork"].front_default || 
                 data.sprites.front_default
      };
    } catch (error) {
      console.error(`Error fetching Pokemon ${nameOrId}:`, error);
      // Return a placeholder Pokemon in case of error
      return {
        id: 0,
        name: "Unknown",
        types: ["Unknown"],
        imageUrl: ""
      };
    }
  }

  /**
   * Helper method to capitalize a string
   */
  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}