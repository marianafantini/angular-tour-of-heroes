import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  // reserve constructor for simple initialization only
  constructor(private heroService: HeroService) { }

  // get data on ngOnInit
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // print response object
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
