import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-examples',
    templateUrl: './examples.component.html',
    styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

    constructor() { }
    // interpolation
    testInterpolation: string = "Some text to be bound";

    // test one-way
    testOneWay: number = 0;
    incrementOneWay = function () {
        this.testOneWay++;
    }

    // test two-way
    testTwoWay: number = 0;
    incrementTwoWay = function () {
        this.testTwoWay++;
    }

    twoWayCode1: string = "<app-two-way-binding-example [(count)]='testTwoWay'></app-two-way-binding-example>";
    twoWayCode2: string = "<app-two-way-binding-example [count]='testTwoWay' (countChange)='testTwoWay = $event'></app-two-way-binding-example>";
    twoWayCode3: string = "<app-two-way-binding-example [count]='testTwoWay' (countChange)='onCountChange($event)'></app-two-way-binding-example>";

    ngOnInit() {
    }

}

var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
};

function escapeHtml(string) {
    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
        return entityMap[s];
    });
}