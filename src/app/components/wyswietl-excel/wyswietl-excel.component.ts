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
  }

  zapiszDoExcela() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.values);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }

}
