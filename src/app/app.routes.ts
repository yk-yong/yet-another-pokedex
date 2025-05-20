import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";

export const routes: Routes = [
  { path: "", redirectTo: "about", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "pokemon", component: PokemonListComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", redirectTo: "about" },
];
