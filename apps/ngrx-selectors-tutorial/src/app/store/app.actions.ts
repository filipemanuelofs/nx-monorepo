import { createAction, props } from "@ngrx/store";
import { Company, Truck, User } from "./models";

export const SaveUsers = createAction(
  '[USERS] SaveUsers',
  props<{ users: User[] }>()
);

export const SaveCompanies = createAction(
  '[Companies] SaveCompanies',
  props<{ companies: Company[] }>()
);

export const SaveTrucks = createAction(
  '[Trucks] SaveTrucks',
  props<{ trucks: Truck[] }>()
);
