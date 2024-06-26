import { Component, inject} from '@angular/core';
import { CategoryEditDialogComponent } from './category-edit-dialog/category-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CloseScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
@Component({
  selector: 'app-category-management',
  standalone: true,
  imports: [CategoryEditDialogComponent],
  templateUrl: './category-management.component.html',
  styles: ``,
})
export class CategoryManagementComponent{

  readonly dialog = inject(MatDialog);
  constructor(private scrollOptions: ScrollStrategyOptions) {

  }

  openEditDialog() {
    this.dialog.open(CategoryEditDialogComponent, { maxWidth: '100vw', maxHeight: '100vh', panelClass: 'overflow-hidden'});
  }

}
