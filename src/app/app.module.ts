import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { ComponentsModule } from "./components/components.module";
import { MaterialModule } from "./shared/material/material.module";
import { LandingLayoutComponent } from "./layouts/landing-layout/landing-layout.component";
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingLayoutComponent,
    DashboardLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ComponentsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
