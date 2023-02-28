import { NgModule } from "@angular/core";

import { ContactComponent } from './contact.component';

//Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations:[
        ContactComponent
    ],
    imports:[
        MatDialogModule,
        MatButtonModule
    ],
    exports:[
        ContactComponent
    ]
})

export class ContactModule { }