import { Injectable } from '@angular/core';

import { TranslationChain } from '../translation/translation-chain';

@Injectable()
export class FavoriteChainsService {

    constructor() {

    }

    createChain(word: string, lang1: string, lang2: string): TranslationChain {
        let chain = new TranslationChain();
        chain.words.push(word);
        chain.firstLanguage = lang1;
        chain.secondLanguage = lang2;
        return chain;
    }

    getFavoriteChains(): TranslationChain[] {
        return [
            this.createChain('Humans are making mistakes, God is not.', 'en', 'ja'),
            this.createChain('Maggots are gross!', 'en', 'ja'),
            this.createChain('一石二鳥', 'ja', 'en')
        ];
    }
}
