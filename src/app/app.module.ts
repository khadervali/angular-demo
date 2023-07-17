import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DstnyDsModule } from '@telepo/dstny-ds/dist/dstny-ds-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DstnyDsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
