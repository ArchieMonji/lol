import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-one-way-binding-example',
    templateUrl: './one-way-binding-example.component.html',
    styleUrls: ['./one-way-binding-example.component.css']
})
export class OneWayBindingExampleComponent implements OnInit {

    constructor() { }

    @Input() count: number;

    increment = function () {
        this.count++;
    }

    ngOnInit() {
    }

}
