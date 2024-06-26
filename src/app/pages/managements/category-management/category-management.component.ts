import { Component, inject} from '@angular/core';
import { CategoryEditDialogComponent } from './category-edit-dialog/category-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-category-management',
  standalone: true,
  imports: [CategoryEditDialogComponent],
  templateUrl: './category-management.component.html',
  styles: ``,
})
export class CategoryManagementComponent{

  readonly dialog = inject(MatDialog);

  openEditDialog() {
    this.dialog.open(CategoryEditDialogComponent, { width: '90rem', height: '50rem', maxWidth: '100vw', maxHeight: '100vh' });
  }

}
