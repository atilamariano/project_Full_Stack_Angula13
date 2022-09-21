import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
    show: Boolean = false;

    constructor() {}

    ngOnInit(): void {}

    showMensage(): void {
        this.show = !this.show; // toggle = troca de estado para não ter que gasta mais de uma linha , troca para o aposto que esta no moneto do evnto clique
    }
}
