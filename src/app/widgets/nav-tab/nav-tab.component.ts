import { Component, input } from '@angular/core';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrl: `./nav-tab-component.scss`
})
export class NavTabComponent {

  path = input.required<string[]>();
  title = input.required<string>();

}
