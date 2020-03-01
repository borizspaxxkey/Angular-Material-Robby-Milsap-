import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {
  emailFormControl: FormControl;

  constructor(@Inject(MatDialog) private dialog, @Inject(MatSnackBar) private snackBar) { }

  ngOnInit() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  }

  openRepDialog() {
    const dialogRef = this.dialog.open(RepDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result) => {
      alert(`User choose ${result}`);
    });
  }

  openUndoSnackBar() {
    const snackBarRef = this.snackBar.open('Customer Saved', 'UNDO', {
      horizontalPosition: 'end'
    });

    snackBarRef.onAction().subscribe(() => {
      alert('Undo that save!');
    });
  }

}
