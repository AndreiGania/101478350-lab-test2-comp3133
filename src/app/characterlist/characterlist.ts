import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../character';
import { Characterfilter } from '../characterfilter/characterfilter';
import { Characterdetails } from '../characterdetails/characterdetails';
import { CharacterDataService } from '../chardata';

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
  selectedCount = signal(0);

  constructor(private characterService: CharacterDataService) {}

  ngOnInit(): void {
    this.loadAllCharacters();
  }

  loadAllCharacters(): void {
    this.characterService.getAllCharacters().subscribe({
      next: (data: Character[]) => {
        this.characters = data;
        this.selectedCount.set(data.length);
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

    this.characterService.getCharactersByHouse(house).subscribe({
      next: (data: Character[]) => {
        this.characters = data;
        this.selectedCount.set(data.length);
      },
      error: (err) => {
        console.error('Error filtering characters by house:', err);
      }
    });
  }

  viewDetails(id: string): void {
    this.characterService.getCharacterDetails(id).subscribe({
      next: (data) => {
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