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
  ankietaStatystyka = {
    pytI1a: 0,
    pytI1b: 0,
    pytI1c: 0,
    pytI1d: 0,

    pytI2a: 0,
    pytI2b: 0,
    pytI2c: 0,
    pytI2d: 0,
  };

  constructor(
    private ankietaService: AnkietaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ankietaService.pobierzAnkiety().subscribe(ankiety => {
      this.ankiety = ankiety;
      // console.log(this.ankiety);
      this.policzOdpowiedzi(ankiety);
      console.log(this.ankietaStatystyka.pytI1a);
      console.log(this.ankietaStatystyka.pytI1b);
      console.log(this.ankietaStatystyka.pytI1c);
      console.log(this.ankietaStatystyka.pytI1d);
    });

  }

  policzOdpowiedzi(ankiety) {
    ankiety.forEach(ankieta => {
      if (ankieta.pytI1 == '2015')
        this.ankietaStatystyka.pytI1a++
      else if (ankieta.pytI1 == '2016')
        this.ankietaStatystyka.pytI1b++
      else if (ankieta.pytI1 == '2017')
        this.ankietaStatystyka.pytI1c++
      else if (ankieta.pytI1 == '2018')
        this.ankietaStatystyka.pytI1d++

      if (ankieta.pytI2a == true)
        this.ankietaStatystyka.pytI2a++
      if (ankieta.pytI2b == true)
        this.ankietaStatystyka.pytI2b++
      if (ankieta.pytI2c == true)
        this.ankietaStatystyka.pytI2c++
      if (ankieta.pytI2d == true)
        this.ankietaStatystyka.pytI2d++

    });

  }


}
