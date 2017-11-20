import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component'

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
