import { Component, OnInit, Inject} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

  ngOnInit() {
  }

  pressNo(): void {
    this.dialogRef.close();
  }
}