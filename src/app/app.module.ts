import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {DxSchedulerModule, DxContextMenuModule} from 'devextreme-angular';

@NgModule({
  imports: [
      BrowserModule,
      DxSchedulerModule,
      DxContextMenuModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
