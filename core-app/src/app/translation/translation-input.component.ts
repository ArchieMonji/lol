import { Component, } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { TranslationChain } from './translation-chain';
@Component({
    selector: 'app-translation-input',
    templateUrl: './translation-input.component.html',
    styleUrls: ['./translation-input.component.css']
})
export class TranslationInputComponent  {

    constructor(private router: Router) { }

    word: string = "yay it works";
    firstLanguage: string = 'en';
    secondLanguage: string = 'ja';

    onClick() {
        this.router.navigate(['/translation', this.firstLanguage, this.secondLanguage, this.word ]);
    }
}
