import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css'
})
export class Characterfilter {
  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  selectedHouse: string = '';

  @Output() houseSelected = new EventEmitter<string>();

  onHouseChange(): void {
    this.houseSelected.emit(this.selectedHouse);
  }
}