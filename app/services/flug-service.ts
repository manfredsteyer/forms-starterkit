﻿import {Injectable, Inject } from 'angular2/core';
import { Http, URLSearchParams } from 'angular2/http';

@Injectable()
export class FlugService {

    constructor(
        @Inject('BASE_URL') private baseUrl: string,
        private http: Http) {
    }

    public find(von, nach) {

        var url = this.baseUrl + "/api/flug";

        var params = new URLSearchParams();
        params.set('abflugOrt', von);
        params.set('zielOrt', nach);

        return this.http
                .get(url, { search: params })
                .map(response => response.json());

    }

}