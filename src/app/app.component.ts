import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template:`<h1>Stand Alone</h1>
  <router-outlet></router-outlet>`,
  standalone:true,
  imports:[CommonModule, RouterModule]
})
export class AppComponent {
  title = 'standAlone';
}
