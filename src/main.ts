import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import {provideHttpClient} from '@angular/common/http'
import { AboutComponent } from './app/components/about/about.component';

bootstrapApplication(AppComponent,{
  providers:[
    provideHttpClient(),
    importProvidersFrom(
      CommonModule,
      RouterModule.forRoot([
        {
          path:'login',
          loadComponent:()=> import("./app/components/login/login.component").then(c => c.LoginComponent),
        },
        {
          path:"",
          loadComponent:()=> import("./app/components/layouts/layouts.component").then(c => c.LayoutsComponent),
          children:[
            {
              path:"",
              loadComponent:()=> import("./app/components/home/home.component").then(c => c.HomeComponent)
            },
            {
              path:"about",
              loadComponent:()=> import("./app/components/about/about.component").then(c => c.AboutComponent)
            }
          ]
        },
        {
          path:"**",
          loadComponent:()=> import("./app/components/not-found/not-found.component").then(c => c.NotFoundComponent)
        }
      ]),
      BrowserModule
    )
  ]
})