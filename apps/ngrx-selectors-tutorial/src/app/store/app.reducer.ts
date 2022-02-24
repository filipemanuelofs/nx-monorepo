import { createReducer, on } from '@ngrx/store';
import * as Actions from './app.actions';
import { Company, Truck, User } from './models';


export interface State {
     users?: User[],
     companies?: Company[],
     trucks?: Truck[],
};

const initialState: State = {
};

export const reducer = createReducer(
  initialState,
  on(Actions.SaveUsers, (state, { users }) => {

    state = {
      ...state,
      users
    }
    return state;

  }),
  on(Actions.SaveCompanies, (state, { companies }) => {
    state = {
      ...state,
      companies
    };
    return state;
  }),
  on(Actions.SaveTrucks, (state, { trucks }) => {
    state = {
      ...state,
      trucks
    };
    return state;
  })
);
