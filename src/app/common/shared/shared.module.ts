import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/components/layouts/navbar/navbar.component';
import { SidebarComponent } from 'src/app/components/layouts/sidebar/sidebar.component';
import { FooterComponent } from 'src/app/components/layouts/footer/footer.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule, 
  ]
})
export class SharedModule { }
