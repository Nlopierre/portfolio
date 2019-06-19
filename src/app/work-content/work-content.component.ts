import {  Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-work-content',
  templateUrl: './work-content.component.html',
  styleUrls: ['./work-content.component.scss']
})
export class WorkContentComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openStereothequeModal(): void {
    const dialogRef = this.dialog.open(StereothequeModal, {
      width: '800px',
    });
  }
  openKevsModal():void{
    const dialogRef = this.dialog.open(KevsModal, {
      width: '800px'
    })
  }

}

@Component({
  selector: 'stereotheque-modal',
  templateUrl: 'stereotheque-modal.html',
  styleUrls: ['./stereotheque-modal.component.scss']
})
export class StereothequeModal {

  constructor(
    public dialogRef: MatDialogRef<StereothequeModal>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'kevs-modal',
  templateUrl: 'kevs-modal.html',
})
export class KevsModal {

  constructor(
    public dialogRef: MatDialogRef<KevsModal>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
