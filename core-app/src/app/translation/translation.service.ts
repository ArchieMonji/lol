import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class TranslationService {

    constructor(private _http: Http) { }

    languageToCode(language: string): string {
        switch (language.toLowerCase()) {
            case "english":
                return "en"
            case "japanese":
                return "ja"
            case "chinese":
                return "zh-CN"
            case "vietmanese":
                return "vi"
            case "french":
                return "fr"
            case "spanish":
                return "es"
        }
    }

    translate(word: string, srcLang: string, destLang: string, callback: (value: Response) => void, error: (error: any) => void): void {
        var url = "https://translation.googleapis.com/language/translate/v2?key=nice_try_very_suspicious"
        url += "&source=" + srcLang;
        url += "&target=" + destLang;
        url += "&q=" + word;
        console.log("Request API: " + url);

        this._http.get(url).subscribe(callback, error);
    }
}
