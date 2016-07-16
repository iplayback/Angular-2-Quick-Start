import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template:`
    <h1>{{title}}</h1>
    <h2>My Pokemons</h2>
    <ul class="pokemons">
      <li *ngFor="let pokemon of pokemons"
        [class.selected]="pokemon === selectedPokemon"
        (click)="onSelect(pokemon)">
        <span class="badge">{{pokemon.id}}</span> {{pokemon.name}}
      </li>
    </ul>
    <div *ngIf="selectedPokemon">
      <h2>{{selectedPokemon.name}} details!</h2>
      <div><label>id: </label>{{selectedPokemon.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedPokemon.name" placeholder="name"/>
      </div>
    </div>`,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .pokemons {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .pokemons li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .pokemons li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .pokemons li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .pokemons .text {
      position: relative;
      top: -3px;
    }
    .pokemons .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {

    title = 'List of Pokemon';
    pokemons = POKEMON;
    selectedPokemon: Pokemon;

    onSelect(pokemon: Pokemon) {
        this.selectedPokemon = pokemon;
    }
}

export class Pokemon {
    id: number;
    name: string;
}

const POKEMON: Pokemon[] = [
    { id: 11, name: 'Bulbasuar' },
    { id: 12, name: 'Ivysaur' },
    { id: 13, name: 'Venosaur' },
    { id: 14, name: 'Charmander' },
    { id: 15, name: 'Charmeleon' },
    { id: 16, name: 'Charizard' },
    { id: 17, name: 'Squirtle' },
    { id: 18, name: 'Wartortle' },
    { id: 19, name: 'Blastoise' },
    { id: 20, name: 'Dragonite' }
];
