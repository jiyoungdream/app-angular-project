import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHero(id: number) : Promise<Hero> {
    return this.getHeroes()
    .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroes() : Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  pushHero(hero:Hero) : void {
    HEROES.push(hero);
  }
}
