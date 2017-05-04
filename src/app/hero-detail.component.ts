import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params }   from '@angular/router'
import { Location }                 from '@angular/common'

import 'rxjs/add/operator/switchMap';

import { Hero }         from "./hero"
import { HeroService }  from './hero.service'

@Component({
    selector: 'hero-detail',
    template: `
        <!-- Checks if selected hero is null -->
        <div *ngIf='hero'>
            <h2>{{hero.name}} details!</h2>
            <div>
                <label>id: </label>{{hero.id}}
            </div>
            <div>
                <label>name: </label>
                <input [(ngModel)]='hero.name' placeholder='name'/>
            </div>
        </div>
    `
})

export class HeroDetailComponent {
    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }
}