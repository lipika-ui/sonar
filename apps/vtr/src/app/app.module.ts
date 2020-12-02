import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HomeproductsComponent } from './components/homeproducts/homeproducts.component';

import { EffectsModule } from '@ngrx/effects';
import { homeproductEffect } from './effects/homeproduct';

import { UiModule } from '@lla/ui';

@NgModule({
  declarations: [AppComponent, HomeproductsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UiModule,
    EffectsModule.forRoot([homeproductEffect]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
/**
 * @class 
 */
export class AppModule {}
