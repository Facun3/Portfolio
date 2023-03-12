import { CdkTextareaAutosize } from '@angular/cdk/text-field/autosize';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Component, NgZone, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { take } from 'rxjs/operators';

@Component({
    selector: 'form-dialog',
    templateUrl: 'form-dialog.component.html',
    styleUrls: ['./form-dialog.component.scss']
  })
  export class FormDialogComponent {

    @ViewChild('autosize') autosize!: CdkTextareaAutosize;

    public urlPost: string  = "https://formspree.io/f/";
    private secretKey: string ="xeqwknab";
    public mailForm = new FormGroup({
      asunto: new FormControl('', [Validators.minLength(10), Validators.required]),
      mail : new FormControl('', [Validators.email, Validators.required]),
      content: new FormControl('', [Validators.minLength(20), Validators.required])
    });


    
    constructor(public dialogRef: MatDialogRef<FormDialogComponent>, private _ngZone: NgZone,public httpClient: HttpClient) {
    }

    triggerResize() {
      // Wait for changes to be applied, then trigger textarea resize.
      this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
    }

    //Send an email using formspree.io account
    sendEmail(name: String, email: String, message: String) {
      
      //Set the url with your secretKey from formspree.io
      let url = this.urlPost + this.secretKey;
  
      //Set Headers
      const httpOptions = {
        headers: new HttpHeaders({
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        })
      };
  
      let data = `name=${name}&email=${email}&message=${message}`;
      let errorMessage: string = "";
  
      this.httpClient.post<any>(url, data, httpOptions).subscribe({
          next: data => {
              console.log("email sent" + JSON.stringify(data));
          },
          error: error => {
              errorMessage = error.message;
              console.log('error!', errorMessage);
          }
      })
    }



  }