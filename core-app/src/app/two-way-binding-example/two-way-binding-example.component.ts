import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-two-way-binding-example',
    templateUrl: './two-way-binding-example.component.html',
    styleUrls: ['./two-way-binding-example.component.css']
})
export class TwoWayBindingExampleComponent implements OnInit {

    constructor() { }

    @Input() count: number;
    @Output() countChange = new EventEmitter<number>();

    increment() {
        this.count++;
        this.countChange.emit(this.count);
    }

    ngOnInit() {
    }

}
