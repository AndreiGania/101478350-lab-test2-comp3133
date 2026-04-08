import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../character';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class Characterdetails {
  @Input() character: Character | null = null;
}