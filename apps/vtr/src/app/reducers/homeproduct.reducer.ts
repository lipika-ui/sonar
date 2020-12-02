import { HomeproductActionTypes } from '../actions/homeproduct.actions';

interface IHomeproduct {
  list: [];
  loading: boolean;
  error: string | null;
}

const initialState: IHomeproduct = {
  list: [],
  loading: false,
  error: null,
};
/**
 * @function
 * @param {any}
 * @param {any}
 * @return {string}
 */
export function HomeproductReducer(state: IHomeproduct = initialState, action) {
  switch (action.type) {
    case HomeproductActionTypes.LoadHomeproducts: {
      const newState = { ...state };
      newState.loading = true;
      return newState;
    }
    case HomeproductActionTypes.LoadHomeproductsSuccess: {
      const newState = { ...state };
      newState.list = action.payload.items.data;
      newState.loading = false;
      return newState;
    }
    case HomeproductActionTypes.LoadHomeproductsFailure: {
      const newState = { ...state };
      newState.list = [];
      newState.error = 'Error getting Homeproducts';
      return newState;
    }

    default:
      break;
  }
}
