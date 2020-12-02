import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { HomeproductReducer } from './homeproduct.reducer';

export const applicationStateFeatureKey = 'applicationState';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {}

export const reducers: ActionReducerMap<State> = {
  homeproducts: HomeproductReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
