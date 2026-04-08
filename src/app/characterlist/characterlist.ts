import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Character } from '../character';
import { Characterfilter } from '../characterfilter/characterfilter';
import { Characterdetails } from '../characterdetails/characterdetails';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, Characterfilter, Characterdetails],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css',
})
export class Characterlist implements OnInit {
  characters: Character[] = [];
  selectedCharacter: Character | null = null;

  allCharactersUrl = 'https://hp-api.onrender.com/api/characters';
  houseUrl = 'https://hp-api.onrender.com/api/characters/house';
  detailsUrl = 'https://hp-api.onrender.com/api/character';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAllCharacters();
  }

  loadAllCharacters(): void {
    this.http.get<Character[]>(this.allCharactersUrl).subscribe({
      next: (data) => {
        this.characters = data;
      },
      error: (err) => {
        console.error('Error fetching characters:', err);
      }
    });
  }

  filterByHouse(house: string): void {
    this.selectedCharacter = null;

    if (!house) {
      this.loadAllCharacters();
      return;
    }

    this.http.get<Character[]>(`${this.houseUrl}/${house.toLowerCase()}`).subscribe({
      next: (data) => {
        this.characters = data;
      },
      error: (err) => {
        console.error('Error filtering characters by house:', err);
      }
    });
  }

  viewDetails(id: string): void {
  console.log('clicked id:', id);
    this.http.get<Character[] | Character>(`${this.detailsUrl}/${id}`).subscribe({
      next: (data) => {
        console.log('details response:', data);

        if (Array.isArray(data)) {
          this.selectedCharacter = data.length > 0 ? data[0] : null;
        } else {
          this.selectedCharacter = data;
        }
      },
      error: (err) => {
        console.error('Error fetching character details:', err);
      }
    });
  }
}