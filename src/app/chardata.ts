import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {
  private allCharactersUrl = 'https://hp-api.onrender.com/api/characters';
  private houseUrl = 'https://hp-api.onrender.com/api/characters/house';
  private detailsUrl = 'https://hp-api.onrender.com/api/character';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.allCharactersUrl);
  }

  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.houseUrl}/${house.toLowerCase()}`);
  }

  getCharacterDetails(id: string): Observable<Character[] | Character> {
    return this.http.get<Character[] | Character>(`${this.detailsUrl}/${id}`);
  }
}