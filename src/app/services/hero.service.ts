import { Http } from '@angular/http';
import { Hero } from './../models/hero';
import { HEROES } from './../mock/mock-heroes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private base_url = 'api/heroes'; // URL API

    constructor(private http: Http) { }

    // returns promise
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.base_url).toPromise().then(response => response.json().data as Hero[]).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    getHero(id: number): Promise<Hero> {
        const by_id_url = `${this.base_url}/${id}`;
        return this.http.get(by_id_url).toPromise().then(response => response.json().data as Hero).catch(this.handleError);
    }

    search(term: string): Observable<Hero[]> {
        const by_name_url = `${this.base_url}/?name=${term}`;
        return this.http.get(by_name_url).map(response => response.json().data as Hero[]);
    }
}
