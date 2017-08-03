import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TranslationService } from './translation/translation.service';
import { TranslationInputComponent } from './translation/translation-input.component';
import { TranslationViewComponent } from './translation/translation-view.component';

import { AppRoutingModule } from './app-routing.module';
import { ExamplesComponent } from './examples/examples.component';
import { OneWayBindingExampleComponent } from './one-way-binding-example/one-way-binding-example.component';
import { TwoWayBindingExampleComponent } from './two-way-binding-example/two-way-binding-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TranslationViewComponent,
    TranslationInputComponent,
    ExamplesComponent,
    OneWayBindingExampleComponent,
    TwoWayBindingExampleComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpModule
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
