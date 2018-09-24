import { Component, OnInit } from '@angular/core';
import { AnkietaService } from '../../services/ankieta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wyswietl-statystyki',
  templateUrl: './wyswietl-statystyki.component.html',
  styleUrls: ['./wyswietl-statystyki.component.css']
})
export class WyswietlStatystykiComponent implements OnInit {
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

  policzOdpowiedzi() {
    this.ankiety.array.forEach(ankieta => {

    });
  }


}
