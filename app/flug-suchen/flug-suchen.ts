
import {Component, provide, Inject} from 'angular2/core';
import {IFlug} from '../flug';
import { FlugService} from '../services/flug-service';
import { OrtPipe} from '../pipes/ort-pipe';
import { ROUTER_DIRECTIVES} from 'angular2/router';

declare var fetch: any;
 
@Component({
    selector: 'flug-suchen', // <flug-suchen></flug-suchen> <flug-suchen></flug-suchen>
    templateUrl: 'app/flug-suchen/flug-suchen.html',
    pipes: [OrtPipe],
    directives: [ROUTER_DIRECTIVES]
    // providers: [provide(FlugService, { useClass: FlugService }]
})
export class FlugSuchen {

    public von: string = "Graz";
    public nach: string = "Hamburg";
    public fluege: Array<IFlug> = new Array<IFlug>();
    public selectedFlug: IFlug;

    /*
    private flugService: FlugService;

    constructor(flugService: FlugService) {
        this.flugService = flugService;
    }
    */

    constructor(private flugService: FlugService) {
    }

    public suchen(): void {

        this.flugService
            .find(this.von, this.nach)
            .subscribe(
                fluege => { // RxJS
                    this.fluege = fluege;
                },
                err => {
                    console.warn("Fehler beim Laden!");
                    console.warn(err);
                }    
        );

    }

    public selectFlug(flug: IFlug) {
        this.selectedFlug = flug;
    }

}