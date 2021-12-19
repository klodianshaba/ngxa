import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from "./not-found/not-found.component";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
