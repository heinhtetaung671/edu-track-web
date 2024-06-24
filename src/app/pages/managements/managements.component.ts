import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WidgetsModule } from "../../widgets/widgets.module";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-managements',
  standalone: true,
  imports: [RouterModule, WidgetsModule, NavBarComponent],
  templateUrl: './managements.component.html',
})
export class ManagementsComponent {

}
