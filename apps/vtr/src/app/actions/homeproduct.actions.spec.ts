import * as HomeproductActions from './homeproduct.actions';

describe('loadHomeproducts', () => {
  it('should return an action', () => {
    expect(new HomeproductActions.LoadHomeproducts()).toBeTruthy();
  });
});
