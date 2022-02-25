import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from './store/app.actions';
import { State } from './store/app.reducer';
import { selectCompaniesWithTrucks, selectFirstUserName } from './store/app.selectors';
import { Company, Truck, User } from './store/models';


@Component({
  selector: 'hypeit-brasil-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    private readonly http: HttpClient,
    private readonly store: Store<{ app: State }>
  ) { }

  firstUserName$ = this.store.select(selectFirstUserName)

  firstUserCompanies$ = this.store.select(selectCompaniesWithTrucks)

  ngOnInit(): void {
    this.http.get<User[]>('http://localhost:3000/users').subscribe({
      next: users => this.store.dispatch(Actions.SaveUsers({ users }))
    })
    this.http.get<Company[]>('http://localhost:3000/companies').subscribe({
      next: companies => this.store.dispatch(Actions.SaveCompanies({ companies }))
    })
    this.http.get<Truck[]>('http://localhost:3000/trucks').subscribe({
      next: trucks => this.store.dispatch(Actions.SaveTrucks({ trucks }))
    })
  }

}
