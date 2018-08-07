import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-ankieta',
  templateUrl: './ankieta.component.html',
  styleUrls: ['./ankieta.component.css']
})
export class AnkietaComponent implements OnInit {
  ankieta = {
    odKiedyHR: ''
  };

  constructor() { }

  ngOnInit() {
  }

  zapisz(form) {

  }



}
