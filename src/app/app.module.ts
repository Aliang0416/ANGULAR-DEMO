import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateFormatPipe } from './date-format.pipe';
import { ClickDirective } from './directives/click.directive';
import { ShowPictureComponent } from './components/show-picture/show-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    DateFormatPipe,
    ClickDirective,
    ShowPictureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
