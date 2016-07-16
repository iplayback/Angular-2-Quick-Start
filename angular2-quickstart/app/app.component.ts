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
    </div>`
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
