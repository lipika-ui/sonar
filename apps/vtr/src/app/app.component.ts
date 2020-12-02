import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadHomeproducts } from './actions/homeproduct.actions';
import { HomeproductsService } from './services/homeproducts.service';

/**
 * @component
 */
@Component({
  selector: 'lla-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

/**
 * @export
 */
export class AppComponent implements OnInit {
  title = 'VTR';
  /**
   * @constructor
   */
  constructor(
    private store$: Store,
    private homeproducts: HomeproductsService
  ) {}

  /**
   * @function
   */
  ngOnInit() {
    this.store$.dispatch(new LoadHomeproducts());
  }
}
