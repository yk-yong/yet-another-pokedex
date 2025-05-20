import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  
  searchTerm = '';
  
  // Emit search event when submitting form
  onSubmit(): void {
    this.search.emit(this.searchTerm);
  }
  
  // Clear search
  clearSearch(): void {
    this.searchTerm = '';
    this.search.emit('');
  }
}