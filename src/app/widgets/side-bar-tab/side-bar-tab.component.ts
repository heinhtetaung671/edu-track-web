import { Component, input } from '@angular/core';

@Component({
  selector: 'app-side-bar-tab',
  templateUrl: './side-bar-tab.component.html',
  styles: ``
})
export class SideBarTabComponent {

  path = input.required<string[]>();
  title = input.required<string>();

}
