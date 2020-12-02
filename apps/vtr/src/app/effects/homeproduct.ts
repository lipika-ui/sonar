import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  LoadHomeproductsSuccess,
  HomeproductActionTypes,
} from '../actions/homeproduct.actions';
import { HomeproductsService } from '../services/homeproducts.service';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
/**
 * @class
 */
export class homeproductEffect {
  getHomeproducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeproductActionTypes.LoadHomeproducts),
      mergeMap(() => {
        return this.homeproduct$.getHomeproducts().pipe(
          map((response) => {
            return new LoadHomeproductsSuccess({ items: response });
          })
        );
      })
    );
  });
  /**
   * @constructor
   */
  constructor(
    private actions$: Actions,
    private homeproduct$: HomeproductsService
  ) {}
}
