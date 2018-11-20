import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnkietaService } from '../../services/ankieta.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-wyswietl-excel',
  templateUrl: './wyswietl-excel.component.html',
  styleUrls: ['./wyswietl-excel.component.css']
})
export class WyswietlExcelComponent implements OnInit {
  ankiety: any;
  // values: {}[] = [{}];

  constructor(
    private ankietaService: AnkietaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ankietaService.pobierzAnkiety().subscribe(ankiety => {
      this.ankiety = ankiety;
      // Object.entries(ankiety).forEach(
      //   ([key, value]) => {
      //     this.values.push(value);
      //   });
    });
    // console.log(this.values);
  }


}
