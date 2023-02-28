import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'form-dialog',
    templateUrl: 'form-dialog.component.html',
  })
  export class FormDialog {
    constructor(public dialogRef: MatDialogRef<FormDialog>) {}
  }