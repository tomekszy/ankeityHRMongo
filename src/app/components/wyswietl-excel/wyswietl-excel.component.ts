import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnkietaService } from '../../services/ankieta.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-wyswietl-excel',
  templateUrl: './wyswietl-excel.component.html',
  styleUrls: ['./wyswietl-excel.component.css']
})
export class WyswietlExcelComponent implements OnInit {
  ankiety: any;
  values: {}[] = [{}];
  keys: {}[] = [{}];
  data: any[][];
  // data: {}[] = [{}];


  constructor(
    private ankietaService: AnkietaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ankietaService.pobierzAnkiety().subscribe(ankiety => {
      this.ankiety = ankiety;
      Object.entries(ankiety).forEach(
        ([key, value]) => {
          this.values.push(value);
          this.keys.push({ key: key });
        });
    });
    this.data = [1, 2, 3]['a'];
    //tu jakoś inaczej przerobić te tablice, żeby plugin łykał
  }

  zapiszDoExcela() {
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }


}
