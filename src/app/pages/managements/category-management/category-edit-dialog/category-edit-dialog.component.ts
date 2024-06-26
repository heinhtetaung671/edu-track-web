import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-category-edit-dialog',
  standalone: true,
  imports: [MatDialogModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './category-edit-dialog.component.html',
  styles: ``
})
export class CategoryEditDialogComponent {

  readonly dialogRef = inject(MatDialogRef<CategoryEditDialogComponent>);
  readonly data = inject<number>(MAT_DIALOG_DATA);
  id = signal<number>(this.data);
  title = computed(() => this.id() > 0 ? 'Category Update Form' : 'Category Create Form');

  form: FormGroup | undefined;

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      name: ['', Validators.required],
      description: ''
    })
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
