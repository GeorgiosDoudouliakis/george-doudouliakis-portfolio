/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Place your module imports here */
import { AppRoutingModule } from './app-routing.module';

/* Place your component imports here */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
