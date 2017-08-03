import { Component, OnInit } from '@angular/core';

import { FavoriteChainsService } from './favorite-chains.service';
import { TranslationChain } from '../translation/translation-chain';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [FavoriteChainsService]
})
export class DashboardComponent implements OnInit {

  constructor(private favoriteChainsService: FavoriteChainsService) { }

  favorites: TranslationChain[];

  ngOnInit() {
      this.favorites = this.favoriteChainsService.getFavoriteChains();
  }

}
