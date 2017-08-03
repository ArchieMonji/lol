import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { TranslationChain } from './translation-chain';
import { TranslationService } from './translation.service';

@Component({
    selector: 'translation-view',
    templateUrl: './translation-view.component.html',
    styleUrls: ['./translation-view.component.css']
})
export class TranslationViewComponent implements OnInit {
    @ViewChild('canvas') canvasRef: ElementRef;

    constructor(private activatedRoute: ActivatedRoute, private translationService: TranslationService) { }


    codeToLanguage(code: string): string {
        switch (code.toLowerCase()) {
            case "en":
                return "english"
            case "ja":
                return "japanese"
            case "zh-cn":
                return "chinese"
            case "vi":
                return "vietmanese"
            case "es":
                return "spanish"
            case "fr":
                return "french"
            case "it":
                return "italian"
            case "la":
                return "latin"
            default:
                return "lol that's not real"
        }
    }

    private _translationChain: TranslationChain;
    @Input() set translationChain(value: TranslationChain) {
        this._translationChain = value;
    }

    get translationChain(): TranslationChain {
        return this._translationChain;
    }

    stepping: boolean = false;

    step() {
        if (this.stepping) {
            return;
        }
        this.stepping = true;
        let chain = this.translationChain;

        let length = chain.words.length;
        // get last word
        let word = chain.words[length - 1];

        let srcLang, destLang;
        if (length % 2 == 0) {
            // if even, then 2nd -> 1st
            srcLang = chain.secondLanguage;
            destLang = chain.firstLanguage;
        }
        else {
            // if odd, then 1st -> 2nd
            srcLang = chain.firstLanguage;
            destLang = chain.secondLanguage;
        }

        console.log(`word: ${word} - src: ${srcLang} => dest: ${destLang}`);

        // webservice call
        this.translationService.translate(word, srcLang, destLang, (data) => {
            this.translationChain.words.push(data.json().data.translations[0].translatedText);
            this.draw();
            this.stepping = false;
        }, () => {
            this.stepping = false;
        });
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            if (params["word"]) {
                this.translationChain = new TranslationChain();
                this.translationChain.firstLanguage = params['lang1'];
                this.translationChain.secondLanguage = params['lang2'];
                this.translationChain.words.push(params['word']);
            }
        });
        this.draw();
        this.stepping = false;
    }

    draw() {
        let ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');

        var canvas = this.canvasRef.nativeElement;

        var cWidth = canvas.width;
        var cHeight = canvas.height;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, cWidth, cHeight);

        if (!this.translationChain) {
            return;
        }

        ctx.lineWidth = 4;

        let leftColumnX: number = 0.05 * cWidth;
        let rightColumnX: number = 0.55 * cWidth;
        let width: number = 0.4 * cWidth;
        let height: number = 50;
        let yHeaderOffset: number = 75;
        let yOffset: number = 25;

        let scaleFactor = cHeight / (yHeaderOffset + ((height + yOffset) * this.translationChain.words.length));
        if (scaleFactor < 1) {
            ctx.translate((cWidth - (cWidth * scaleFactor)) / 2, 0);
            ctx.scale(scaleFactor, scaleFactor);
        }

        ctx.fillStyle = "#777"
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.codeToLanguage(this.translationChain.firstLanguage), leftColumnX + width / 2, yHeaderOffset / 2);
        ctx.fillText(this.codeToLanguage(this.translationChain.secondLanguage), rightColumnX + width / 2, yHeaderOffset / 2);

        for (let i = 0; i < this.translationChain.words.length; i++) {
            let x: number = i % 2 == 0 ? leftColumnX : rightColumnX;
            let y: number = yHeaderOffset + (i * (height + yOffset));

            ctx.fillStyle = '#efefef';
            ctx.fillRect(x, y, width, height);
            ctx.strokeStyle = '#ccc';
            ctx.strokeRect(x, y, width, height);
            ctx.fillStyle = "#777";
            ctx.font = "30px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            let metrics: TextMetrics = ctx.measureText(this.translationChain.words[i]);
            let fontsize = 30;
            let fontface = "Arial" 
            let text = this.translationChain.words[i];
            do {
                fontsize--;
                ctx.font = fontsize + "px " + fontface;
            } while (ctx.measureText(text).width > width)
            ctx.fillText(text, x + width / 2, y + height / 2);

            if (i < this.translationChain.words.length - 1) {
                ctx.fillStyle = "#ccc";
                ctx.beginPath();
                if (i % 2 == 0) {
                    ctx.moveTo(x + width, y + height / 2);
                    ctx.lineTo(rightColumnX, y + height + yOffset + height / 2);
                }
                else {
                    ctx.moveTo(x, y + height / 2);
                    ctx.lineTo(leftColumnX + width, y + height + yOffset + height / 2);
                }
                ctx.stroke();
            }

        }
    }
}
