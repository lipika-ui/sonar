import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
/**
 * @class
 */
export class HomeproductsService {
  /**
   * @constructor
   */
  constructor(private http: HttpClient) {}
  /**
   * @function
   * @return {string}
   */
  getHomeproducts() {
    return this.http.get(
      'https://directus.projects.prodaptconsulting.com/directus/items/basic_pages'
    );
  }
}
