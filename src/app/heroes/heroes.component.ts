import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';
import { CommonHttpService } from '../common-http.service';

import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroservice : HeroService,
    private commonHttp : CommonHttpService,
    private _router : Router
  ){}

  title = 'Tour of Heroes';

  heroes : Hero[];
  selectedHero: Hero;
  onSelect(hero:Hero) : void {
    this.selectedHero = hero;
  }

  gotoDetail(): void { this._router.navigate(['/detail', this.selectedHero.id]); }

  ngOnInit() : void {
    this.heroservice.getHeroes()
    .then(result => this.heroes = result);

    let newHero = new Hero(33, "kkkk");
    this.heroservice.pushHero(newHero);

    this.commonHttp.getListo()
    .subscribe(
      result => {
        console.log("333" + JSON.stringify(result));
      });
  }
}
