import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { reducer } from './store/app.reducer';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({ app: reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
