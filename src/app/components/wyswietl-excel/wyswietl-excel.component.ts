import { Component, OnInit } from '@angular/core';
import { AnkietaService } from '../../services/ankieta.service';
import { Router } from '@angular/router';


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
