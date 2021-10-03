import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ExtensionsModule} from "./extensions/extensions.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./gravity-fw-core/material.module";
import {UiLibraryModule} from "./ui-library/ui-library.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExtensionsModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiLibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
