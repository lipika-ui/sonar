/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'lla-homeproducts',
  templateUrl: './homeproducts.component.html',
  styleUrls: ['./homeproducts.component.scss'],
})
/**
 * @class
 */
export class HomeproductsComponent implements OnInit {
  data$: Observable<any> | null = null;
  /**
   * @constructor
   */
  constructor(private store$: Store) {}
  /**
   * @function
   */
  ngOnInit(): void {
    this.data$ = this.store$.pipe(
      select((state: any) => {
        return {
          homeproducts: state.homeproducts && state.homeproducts.list,
        };
      })
    );
  }
}
