import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TranslationInputComponent } from './translation/translation-input.component';
import { TranslationViewComponent } from './translation/translation-view.component';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'translation', component: TranslationInputComponent },
    { path: 'examples', component: ExamplesComponent },
    { path: 'translation/:lang1/:lang2/:word', component: TranslationViewComponent },
    { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }