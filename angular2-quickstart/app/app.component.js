"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'List of Pokemon';
        this.pokemons = POKEMON;
    }
    AppComponent.prototype.onSelect = function (pokemon) {
        this.selectedPokemon = pokemon;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Pokemons</h2>\n    <ul class=\"pokemons\">\n      <li *ngFor=\"let pokemon of pokemons\"\n        [class.selected]=\"pokemon === selectedPokemon\"\n        (click)=\"onSelect(pokemon)\">\n        <span class=\"badge\">{{pokemon.id}}</span> {{pokemon.name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedPokemon\">\n      <h2>{{selectedPokemon.name}} details!</h2>\n      <div><label>id: </label>{{selectedPokemon.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedPokemon.name\" placeholder=\"name\"/>\n      </div>\n    </div>",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .pokemons {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .pokemons li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .pokemons li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .pokemons li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .pokemons .text {\n      position: relative;\n      top: -3px;\n    }\n    .pokemons .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Pokemon = (function () {
    function Pokemon() {
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
var POKEMON = [
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
//# sourceMappingURL=app.component.js.map