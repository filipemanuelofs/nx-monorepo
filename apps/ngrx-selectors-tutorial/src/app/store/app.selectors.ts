import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './app.reducer';
import { Company, Truck } from './models';

export const selectApp = createFeatureSelector<State>('app');

export const selectFirstUser = createSelector(
  selectApp,
  (state) => {
    return state.users?.[0]
  }
)

export const selectCompanies = createSelector(
  selectApp,
  state => state.companies
)

export const selectTrucks = createSelector(
  selectApp,
  state => state.trucks
)


export const selectCompaniesWithTrucks = createSelector(
  selectCompanies,
  selectTrucks,
  (companies, trucks) => {
    return companies?.map(company => ({
      ...company,
      trucks: trucks?.filter(truck => truck.companyId === company.id)
    } as CompanyWithTrucks))
  }
)


export const selectFirstUserName = createSelector(
  selectFirstUser,
  (user) => {
    return user?.name
  }
)

export const selectFirstUserCompanies = createSelector(
  selectFirstUser,
  selectCompaniesWithTrucks,
  (user, companies) => {
    return companies?.filter(company => company.userId === user?.id)
  }
)


export interface CompanyWithTrucks extends Company {
  trucks: Truck[];
}
