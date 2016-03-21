import {Component } from 'angular2/core';
import {RouteParams } from 'angular2/router';

@Component({
    templateUrl: 'app/flug-edit/flug-edit.html'
})
export class FlugEdit {

    private id: number;

    constructor(params: RouteParams) {
        this.id = parseInt(params.get('id'));
    }

    info = "Flug-Edit";

}