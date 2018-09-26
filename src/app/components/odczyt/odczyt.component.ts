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
    public router: Router
  ) { }

  ngOnInit() {
    this.ankietaService.pobierzAnkiety().subscribe(ankiety => {
      this.ankiety = ankiety;
      // console.log(this.ankiety);
      ankiety.forEach(function (ankieta, index) {
        ankieta.dataAnkiety = ankieta.aktualnaData.seconds * 1000;
        ankiety[index].liczbaOdpowiedzi = 0;
        if (ankieta.pytI1 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytI2a === false &&
          ankieta.pytI2b === false &&
          ankieta.pytI2c === false &&
          ankieta.pytI2d === false) { } else {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytI3a === false &&
          ankieta.pytI3b === false &&
          ankieta.pytI3c === false &&
          ankieta.pytI3d === false) { } else {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytII1 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytII2 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytII3 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytII4 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytII5 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII01 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII02 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII03 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII04 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII05 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII06 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII07 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII08 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII09 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII10 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII11 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII12 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII13 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII14 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII15 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII16 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII17 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII18 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII19 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII20 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII21 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII22 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII23 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII24 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII25 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII26 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII27 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII28 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII29 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII30 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII31 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII32 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII33 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII34 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII35 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII36 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII37 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII38 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII39 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }
        if (ankieta.pytIII40 !== '') {
          ankiety[index].liczbaOdpowiedzi++;
        }

        // if (ankieta.uwagi == '')
        //   ankieta.uwagi = 'brak uwag'

        // console.log(ankiety[index].liczbaOdpowiedzi);
        // console.log(index);
      });
    });
  }


}
