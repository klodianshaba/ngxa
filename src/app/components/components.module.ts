import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent} from "./footer/footer.component";
import { SidebarComponent} from "./sidebar/sidebar.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { MaterialModule } from "../shared/material/material.module";
import { DescriptionComponent } from './description/description.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotFoundComponent,
    DescriptionComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        NotFoundComponent,
        DescriptionComponent,
        CardComponent
    ]
})
export class ComponentsModule { }
