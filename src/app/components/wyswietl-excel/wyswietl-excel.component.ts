import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnkietaService } from '../../services/ankieta.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as XLSX from 'xlsx';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

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
    });
  }

  zapiszDoExcela() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.ankiety);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'ankiety.xlsx');
  }

  zapiszDoPdf() {
    var data = document.getElementById('tabelaAnkiety');
    html2canvas(data).then(canvas => {
      // Few necessary setting options 
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF 
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('ankiety.pdf'); // Generated PDF  
    });
  }

  convert() {
    var item = {
      "Name": "XYZ",
      "Age": "22",
      "Gender": "Male"
    };
    var doc = new jsPDF();
    var col = ["Details", "Values"];
    var rows = [];

    for (var key in item) {
      var temp = [key, item[key]];
      rows.push(temp);
    }

    doc.autoTable(col, rows);

    doc.save('Test.pdf');
  }

}
