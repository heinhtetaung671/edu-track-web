import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarTabComponent } from './side-bar-tab/side-bar-tab.component';
import { RouterModule } from '@angular/router';
import { NavTabComponent } from './nav-tab/nav-tab.component';

@NgModule({
  declarations: [
    SideBarTabComponent,
    NavTabComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarTabComponent,
    NavTabComponent
  ]
})
export class WidgetsModule { }
