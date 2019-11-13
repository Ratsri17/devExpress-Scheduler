import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {DxSchedulerModule, DxTemplateModule, DxButtonModule, DxTooltipModule} from 'devextreme-angular';

@NgModule({
  imports: [
      BrowserModule,
      DxSchedulerModule,
      DxTemplateModule,
      DxButtonModule,
      DxTooltipModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
