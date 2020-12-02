/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action } from '@ngrx/store';

export enum HomeproductActionTypes {
  LoadHomeproducts = '[Homeproduct] Load Homeproducts',
  LoadHomeproductsSuccess = '[Homeproduct] Load Homeproducts Success',
  LoadHomeproductsFailure = '[Homeproduct] Load Homeproducts Failure',
}
/**
 * @class
 */
export class LoadHomeproducts implements Action {
  readonly type = HomeproductActionTypes.LoadHomeproducts;
}
/**
 * @class
 */
export class LoadHomeproductsSuccess implements Action {
  readonly type = HomeproductActionTypes.LoadHomeproductsSuccess;
  /**
   * @constructor
   */
  constructor(public payload: { items: any }) {}
}
/**
 * @class
 */
export class LoadHomeproductsFailure implements Action {
  readonly type = HomeproductActionTypes.LoadHomeproductsFailure;
  /**
   * @constructor
   */
  constructor(public payload: { items: any }) {}
}

export type HomeproductActions =
  | LoadHomeproducts
  | LoadHomeproductsSuccess
  | LoadHomeproductsFailure;
