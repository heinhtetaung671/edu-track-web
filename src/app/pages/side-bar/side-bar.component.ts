import { Component, signal } from '@angular/core';
import { WidgetsModule } from '../../widgets/widgets.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [WidgetsModule, CommonModule],
  templateUrl: './side-bar.component.html',
  styles: ``
})
export class SideBarComponent {

  iconSize = signal<any>('size-7');

}
