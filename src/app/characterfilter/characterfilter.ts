import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css'
})
export class Characterfilter implements OnInit {
  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  houseControl = new FormControl('');

  @Output() houseSelected = new EventEmitter<string>();

  ngOnInit(): void {
    this.houseControl.valueChanges.subscribe((value) => {
      this.houseSelected.emit(value ?? '');
    });
  }
}