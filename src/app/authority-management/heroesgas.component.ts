import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import {Hero} from "./hero";
import {Hero2Service} from "./hero2.service";



@Component({
  selector: 'my-heroes',
  templateUrl: './heroesgas.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesgasComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: Hero2Service,
    private router: Router) { }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/heroDetailwg', this.selectedHero.id]);
  }
}
