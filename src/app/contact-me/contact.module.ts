import { NgModule } from "@angular/core";

import { ContactComponent } from './contact.component';
import { FormDialogComponent } from "./form-dialog/form-dialog.component";

//Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        ContactComponent,
        FormDialogComponent
    ],
    imports:[
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule,
        ReactiveFormsModule
    ],
    exports:[
        ContactComponent
    ]
})

export class ContactModule { }