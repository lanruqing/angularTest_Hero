import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero"
import { HEROES } from "../herosData"
import {HeroService} from "../hero.service"
import {MessageService} from "../message.service"
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  heroes :Hero[]
  selectedHero:Hero;
  selectHero(hero:Hero):void{
    this.selectedHero = hero
    this.messageService.add(`choose hero ${this.selectedHero.name}`)
  }
  constructor(private heroService : HeroService,private messageService:MessageService) {}
  gerHeroes():void{
    this.heroService.getHeroes().subscribe(heroes=>{
      this.heroes = heroes
    })
  }
  ngOnInit(): void {
    this.gerHeroes();
    console.log(this.heroes)
  }

}
