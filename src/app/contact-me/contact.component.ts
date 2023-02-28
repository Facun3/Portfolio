import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDialog } from './form-dialog/form-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public send: string  = 'https://formsubmit.co/facusilberman@gmail.com';

  public confirm: string = "Enviar";

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    
    this.dialog.open(FormDialog, {
      width: '250px'
    });

  }
}
