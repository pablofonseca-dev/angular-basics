import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  private heroesList : string[] = ['Ironman', 'Thor', 'Hulk', 'Captain America', 'Black Widow', 'Falcon'];
  private deletedHeroes : (string|undefined) [] = [];

  public get getHeroesList(): string[]{
    return this.heroesList;
  }

  public get getHeroesRemoved(): (string|undefined)[]{
    return this.deletedHeroes;
  }
  public borrarHeroe() : void{
    let heroeRemoved = this.heroesList.pop(); 
    this.deletedHeroes.push(heroeRemoved);
  }

  constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
