import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-pokemon-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"],
})
export class PokemonListComponent {
  pokemonList = [
    {
      id: 1,
      name: "Bulbasaur",
      type: "Grass/Poison",
      imageUrl:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    },
    {
      id: 4,
      name: "Charmander",
      type: "Fire",
      imageUrl:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    },
    {
      id: 7,
      name: "Squirtle",
      type: "Water",
      imageUrl:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    },
    {
      id: 25,
      name: "Pikachu",
      type: "Electric",
      imageUrl:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
    },
    {
      id: 54,
      name: "Psyduck",
      type: "Water",
      imageUrl:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png",
    },
    {
      id: 94,
      name: "Gengar",
      type: "Ghost/Poison",
      imageUrl:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png",
    },
  ];
}
