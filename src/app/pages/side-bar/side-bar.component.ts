import { Component, signal } from '@angular/core';
import { WidgetsModule } from '../../widgets/widgets.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [WidgetsModule, CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent {

  iconSize = signal<any>('size-7');

}
