import { Component } from '@angular/core';
import { Characterlist } from './characterlist/characterlist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Characterlist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}