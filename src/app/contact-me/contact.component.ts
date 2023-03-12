import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormDialogComponent } from './form-dialog/form-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{

  public send: string  = 'https://formsubmit.co/facusilberman@gmail.com';

  public confirm: string = "Enviar";

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  openDialog(): void {
    
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '350px',
      panelClass: 'container',
      scrollStrategy: new NoopScrollStrategy()
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this._snackBar.open("Gracias por tu mensaje! Pronto estare respondiendo 😄",undefined , {duration:1000})
      }
    });
  }
}
