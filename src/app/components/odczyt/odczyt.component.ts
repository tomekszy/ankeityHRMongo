import { Component, OnInit } from '@angular/core';
import { AnkietaService } from '../../services/ankieta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-odczyt',
  templateUrl: './odczyt.component.html',
  styleUrls: ['./odczyt.component.css']
})
export class OdczytComponent implements OnInit {
  ankiety: any;

  constructor(
    private ankietaService: AnkietaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ankietaService.pobierzAnkiety().subscribe(ankiety => {
      this.ankiety = ankiety;
      // console.log(this.ankiety);
    });
  }

}
