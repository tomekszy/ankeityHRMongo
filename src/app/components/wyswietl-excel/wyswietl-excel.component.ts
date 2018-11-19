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
  // ankietaStatystyka = {
  //   pytI1a: 0,
  //   pytI1b: 0,
  //   pytI1c: 0,
  //   pytI1d: 0,

  //   pytI2a: 0,
  //   pytI2b: 0,
  //   pytI2c: 0,
  //   pytI2d: 0,

  //   pytI3a: 0,
  //   pytI3b: 0,
  //   pytI3c: 0,
  //   pytI3d: 0,

  //   pytII1a: 0,
  //   pytII1b: 0,
  //   pytII1c: 0,
  //   pytII1d: 0,

  //   pytII2a: 0,
  //   pytII2b: 0,
  //   pytII2c: 0,
  //   pytII2d: 0,
  //   pytII2e: 0,
  //   pytII2f: 0,
  //   pytII2g: 0,
  //   pytII2h: 0,


  //   pytII3a: 0,
  //   pytII3b: 0,

  //   pytII4a: 0,
  //   pytII4b: 0,
  //   pytII4c: 0,
  //   pytII4d: 0,
  //   pytII4e: 0,
  //   pytII4f: 0,

  //   pytII5a: 0,
  //   pytII5b: 0,
  //   pytII5c: 0,
  //   pytII5d: 0,
  //   pytII5e: 0,
  //   pytII5f: 0,

  //   pytIII01a: 0,
  //   pytIII01b: 0,
  //   pytIII01c: 0,
  //   pytIII01d: 0,
  //   pytIII01e: 0,

  //   pytIII02a: 0,
  //   pytIII02b: 0,
  //   pytIII02c: 0,
  //   pytIII02d: 0,
  //   pytIII02e: 0,

  //   pytIII03a: 0,
  //   pytIII03b: 0,
  //   pytIII03c: 0,
  //   pytIII03d: 0,
  //   pytIII03e: 0,

  //   pytIII04a: 0,
  //   pytIII04b: 0,
  //   pytIII04c: 0,
  //   pytIII04d: 0,
  //   pytIII04e: 0,

  //   pytIII05a: 0,
  //   pytIII05b: 0,
  //   pytIII05c: 0,
  //   pytIII05d: 0,
  //   pytIII05e: 0,
  //   pytIII06a: 0,
  //   pytIII06b: 0,
  //   pytIII06c: 0,
  //   pytIII06d: 0,
  //   pytIII06e: 0,
  //   pytIII07a: 0,
  //   pytIII07b: 0,
  //   pytIII07c: 0,
  //   pytIII07d: 0,
  //   pytIII07e: 0,
  //   pytIII08a: 0,
  //   pytIII08b: 0,
  //   pytIII08c: 0,
  //   pytIII08d: 0,
  //   pytIII08e: 0,
  //   pytIII09a: 0,
  //   pytIII09b: 0,
  //   pytIII09c: 0,
  //   pytIII09d: 0,
  //   pytIII09e: 0,
  //   pytIII10a: 0,
  //   pytIII10b: 0,
  //   pytIII10c: 0,
  //   pytIII10d: 0,
  //   pytIII10e: 0,
  //   pytIII11a: 0,
  //   pytIII11b: 0,
  //   pytIII11c: 0,
  //   pytIII11d: 0,
  //   pytIII11e: 0,
  //   pytIII12a: 0,
  //   pytIII12b: 0,
  //   pytIII12c: 0,
  //   pytIII12d: 0,
  //   pytIII12e: 0,
  //   pytIII13a: 0,
  //   pytIII13b: 0,
  //   pytIII13c: 0,
  //   pytIII13d: 0,
  //   pytIII13e: 0,
  //   pytIII14a: 0,
  //   pytIII14b: 0,
  //   pytIII14c: 0,
  //   pytIII14d: 0,
  //   pytIII14e: 0,
  //   pytIII15a: 0,
  //   pytIII15b: 0,
  //   pytIII15c: 0,
  //   pytIII15d: 0,
  //   pytIII15e: 0,
  //   pytIII16a: 0,
  //   pytIII16b: 0,
  //   pytIII16c: 0,
  //   pytIII16d: 0,
  //   pytIII16e: 0,
  //   pytIII17a: 0,
  //   pytIII17b: 0,
  //   pytIII17c: 0,
  //   pytIII17d: 0,
  //   pytIII17e: 0,
  //   pytIII18a: 0,
  //   pytIII18b: 0,
  //   pytIII18c: 0,
  //   pytIII18d: 0,
  //   pytIII18e: 0,
  //   pytIII19a: 0,
  //   pytIII19b: 0,
  //   pytIII19c: 0,
  //   pytIII19d: 0,
  //   pytIII19e: 0,
  //   pytIII20a: 0,
  //   pytIII20b: 0,
  //   pytIII20c: 0,
  //   pytIII20d: 0,
  //   pytIII20e: 0,
  //   pytIII21a: 0,
  //   pytIII21b: 0,
  //   pytIII21c: 0,
  //   pytIII21d: 0,
  //   pytIII21e: 0,
  //   pytIII22a: 0,
  //   pytIII22b: 0,
  //   pytIII22c: 0,
  //   pytIII22d: 0,
  //   pytIII22e: 0,
  //   pytIII23a: 0,
  //   pytIII23b: 0,
  //   pytIII23c: 0,
  //   pytIII23d: 0,
  //   pytIII23e: 0,
  //   pytIII24a: 0,
  //   pytIII24b: 0,
  //   pytIII24c: 0,
  //   pytIII24d: 0,
  //   pytIII24e: 0,
  //   pytIII25a: 0,
  //   pytIII25b: 0,
  //   pytIII25c: 0,
  //   pytIII25d: 0,
  //   pytIII25e: 0,
  //   pytIII26a: 0,
  //   pytIII26b: 0,
  //   pytIII26c: 0,
  //   pytIII26d: 0,
  //   pytIII26e: 0,
  //   pytIII27a: 0,
  //   pytIII27b: 0,
  //   pytIII27c: 0,
  //   pytIII27d: 0,
  //   pytIII27e: 0,
  //   pytIII28a: 0,
  //   pytIII28b: 0,
  //   pytIII28c: 0,
  //   pytIII28d: 0,
  //   pytIII28e: 0,
  //   pytIII29a: 0,
  //   pytIII29b: 0,
  //   pytIII29c: 0,
  //   pytIII29d: 0,
  //   pytIII29e: 0,
  //   pytIII30a: 0,
  //   pytIII30b: 0,
  //   pytIII30c: 0,
  //   pytIII30d: 0,
  //   pytIII30e: 0,
  //   pytIII31a: 0,
  //   pytIII31b: 0,
  //   pytIII31c: 0,
  //   pytIII31d: 0,
  //   pytIII31e: 0,
  //   pytIII32a: 0,
  //   pytIII32b: 0,
  //   pytIII32c: 0,
  //   pytIII32d: 0,
  //   pytIII32e: 0,
  //   pytIII33a: 0,
  //   pytIII33b: 0,
  //   pytIII33c: 0,
  //   pytIII33d: 0,
  //   pytIII33e: 0,
  //   pytIII34a: 0,
  //   pytIII34b: 0,
  //   pytIII34c: 0,
  //   pytIII34d: 0,
  //   pytIII34e: 0,
  //   pytIII35a: 0,
  //   pytIII35b: 0,
  //   pytIII35c: 0,
  //   pytIII35d: 0,
  //   pytIII35e: 0,
  //   pytIII36a: 0,
  //   pytIII36b: 0,
  //   pytIII36c: 0,
  //   pytIII36d: 0,
  //   pytIII36e: 0,
  //   pytIII37a: 0,
  //   pytIII37b: 0,
  //   pytIII37c: 0,
  //   pytIII37d: 0,
  //   pytIII37e: 0,
  //   pytIII38a: 0,
  //   pytIII38b: 0,
  //   pytIII38c: 0,
  //   pytIII38d: 0,
  //   pytIII38e: 0,
  //   pytIII39a: 0,
  //   pytIII39b: 0,
  //   pytIII39c: 0,
  //   pytIII39d: 0,
  //   pytIII39e: 0,
  //   pytIII40a: 0,
  //   pytIII40b: 0,
  //   pytIII40c: 0,
  //   pytIII40d: 0,
  //   pytIII40e: 0,

  // };

  constructor(
    private ankietaService: AnkietaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ankietaService.pobierzAnkiety().subscribe(ankiety => {
      this.ankiety = ankiety;
      // console.log(this.ankiety);
      // this.policzOdpowiedzi(ankiety);
      // console.log(this.ankietaStatystyka.pytI1a);
      // console.log(this.ankietaStatystyka.pytI1b);
      // console.log(this.ankietaStatystyka.pytI1c);
      // console.log(this.ankietaStatystyka.pytI1d);
    });

  }

  // policzOdpowiedzi(ankiety) {
  //   ankiety.forEach(ankieta => {
  //     if (ankieta.pytI1 === '2015') {
  //       this.ankietaStatystyka.pytI1a++;
  //     } else if (ankieta.pytI1 === '2016') {
  //       this.ankietaStatystyka.pytI1b++;
  //     } else if (ankieta.pytI1 === '2017') {
  //       this.ankietaStatystyka.pytI1c++;
  //     } else if (ankieta.pytI1 === '2018') {
  //       this.ankietaStatystyka.pytI1d++;
  //     }

  //     if (ankieta.pytI2a === true) {
  //       this.ankietaStatystyka.pytI2a++;
  //     }
  //     if (ankieta.pytI2b === true) {
  //       this.ankietaStatystyka.pytI2b++;
  //     }
  //     if (ankieta.pytI2c === true) {
  //       this.ankietaStatystyka.pytI2c++;
  //     }
  //     if (ankieta.pytI2d === true) {
  //       this.ankietaStatystyka.pytI2d++;
  //     }

  //     if (ankieta.pytI3a === true) {
  //       this.ankietaStatystyka.pytI3a++;
  //     }
  //     if (ankieta.pytI3b === true) {
  //       this.ankietaStatystyka.pytI3b++;
  //     }
  //     if (ankieta.pytI3c === true) {
  //       this.ankietaStatystyka.pytI3c++;
  //     }
  //     if (ankieta.pytI3d === true) {
  //       this.ankietaStatystyka.pytI3d++;
  //     }

  //     if (ankieta.pytII1 === 'mgr / mgr inż.') {
  //       this.ankietaStatystyka.pytII1a++;
  //     } else if (ankieta.pytII1 === 'dr / dr inż.') {
  //       this.ankietaStatystyka.pytII1b++;
  //     } else if (ankieta.pytII1 === 'dr hab. / dr hab. inż.') {
  //       this.ankietaStatystyka.pytII1c++;
  //     } else if (ankieta.pytII1 === 'profesor') {
  //       this.ankietaStatystyka.pytII1d++;
  //     }


  //     if (ankieta.pytII2 === 'stażysta') {
  //       this.ankietaStatystyka.pytII2a++;
  //     } else if (ankieta.pytII2 === 'specjalista') {
  //       this.ankietaStatystyka.pytII2b++;
  //     } else if (ankieta.pytII2 === 'starszy specjalista') {
  //       this.ankietaStatystyka.pytII2c++;
  //     } else if (ankieta.pytII2 === 'asystent') {
  //       this.ankietaStatystyka.pytII2d++;
  //     } else if (ankieta.pytII2 === 'adiunkt') {
  //       this.ankietaStatystyka.pytII2e++;
  //     } else if (ankieta.pytII2 === 'profesor nadzw.') {
  //       this.ankietaStatystyka.pytII2f++;
  //     } else if (ankieta.pytII2 === 'profesor zwyczajny') {
  //       this.ankietaStatystyka.pytII2g++;
  //     } else if (ankieta.pytII2 === 'inne') {
  //       this.ankietaStatystyka.pytII2h++;
  //     }

  //     if (ankieta.pytII3 === 'kobieta') {
  //       this.ankietaStatystyka.pytII3a++;
  //     } else if (ankieta.pytII3 === 'mężczyzna') {
  //       this.ankietaStatystyka.pytII3b++;
  //     }

  //     if (ankieta.pytII4 === '24 lata i mniej') {
  //       this.ankietaStatystyka.pytII4a++;
  //     } else if (ankieta.pytII4 === '25-34 lata') {
  //       this.ankietaStatystyka.pytII4b++;
  //     } else if (ankieta.pytII4 === '35-44 lata') {
  //       this.ankietaStatystyka.pytII4c++;
  //     } else if (ankieta.pytII4 === '45-54 lata') {
  //       this.ankietaStatystyka.pytII4d++;
  //     } else if (ankieta.pytII4 === '55-64 lata') {
  //       this.ankietaStatystyka.pytII4e++;
  //     } else if (ankieta.pytII4 === '65 lat i więcej') {
  //       this.ankietaStatystyka.pytII4f++;



  //     }



  //     if (ankieta.pytII5 === '2 lata i mniej') {
  //       this.ankietaStatystyka.pytII5a++;
  //     } else if (ankieta.pytII5 === '3-5 lat') {
  //       this.ankietaStatystyka.pytII5b++;
  //     } else if (ankieta.pytII5 === '6-10 lat') {
  //       this.ankietaStatystyka.pytII5c++;
  //     } else if (ankieta.pytII5 === '11-20 lat') {
  //       this.ankietaStatystyka.pytII5d++;
  //     } else if (ankieta.pytII5 === '21-30 lat') {
  //       this.ankietaStatystyka.pytII5e++;
  //     } else if (ankieta.pytII5 === '31 lat i wiecej') {
  //       this.ankietaStatystyka.pytII5f++;
  //     }

  //     if (ankieta.pytIII01 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII01a++;
  //     } else if (ankieta.pytIII01 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII01b++;
  //     } else if (ankieta.pytIII01 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII01c++;
  //     } else if (ankieta.pytIII01 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII01d++;
  //     } else if (ankieta.pytIII01 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII01e++;

  //     }

  //     if (ankieta.pytIII02 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII02a++;
  //     } else if (ankieta.pytIII02 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII02b++;
  //     } else if (ankieta.pytIII02 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII02c++;
  //     } else if (ankieta.pytIII02 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII02d++;
  //     } else if (ankieta.pytIII02 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII02e++;

  //     }

  //     if (ankieta.pytIII03 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII03a++;
  //     } else if (ankieta.pytIII03 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII03b++;
  //     } else if (ankieta.pytIII03 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII03c++;
  //     } else if (ankieta.pytIII03 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII03d++;
  //     } else if (ankieta.pytIII03 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII03e++;

  //     }
  //     if (ankieta.pytIII04 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII04a++;
  //     } else if (ankieta.pytIII04 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII04b++;
  //     } else if (ankieta.pytIII04 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII04c++;
  //     } else if (ankieta.pytIII04 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII04d++;
  //     } else if (ankieta.pytIII04 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII04e++;

  //     }
  //     if (ankieta.pytIII05 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII05a++;
  //     } else if (ankieta.pytIII05 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII05b++;
  //     } else if (ankieta.pytIII05 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII05c++;
  //     } else if (ankieta.pytIII05 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII05d++;
  //     } else if (ankieta.pytIII05 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII05e++;

  //     }

  //     if (ankieta.pytIII06 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII06a++;
  //     } else if (ankieta.pytIII06 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII06b++;
  //     } else if (ankieta.pytIII06 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII06c++;
  //     } else if (ankieta.pytIII06 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII06d++;
  //     } else if (ankieta.pytIII06 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII06e++;

  //     }

  //     if (ankieta.pytIII07 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII07a++;
  //     } else if (ankieta.pytIII07 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII07b++;
  //     } else if (ankieta.pytIII07 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII07c++;
  //     } else if (ankieta.pytIII07 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII07d++;
  //     } else if (ankieta.pytIII07 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII07e++;

  //     }

  //     if (ankieta.pytIII08 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII08a++;
  //     } else if (ankieta.pytIII08 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII08b++;
  //     } else if (ankieta.pytIII08 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII08c++;
  //     } else if (ankieta.pytIII08 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII08d++;
  //     } else if (ankieta.pytIII08 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII08e++;

  //     }

  //     if (ankieta.pytIII09 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII09a++;
  //     } else if (ankieta.pytIII09 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII09b++;
  //     } else if (ankieta.pytIII09 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII09c++;
  //     } else if (ankieta.pytIII09 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII09d++;
  //     } else if (ankieta.pytIII09 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII09e++;

  //     }


  //     if (ankieta.pytIII10 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII10a++;
  //     } else if (ankieta.pytIII10 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII10b++;
  //     } else if (ankieta.pytIII10 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII10c++;
  //     } else if (ankieta.pytIII10 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII10d++;
  //     } else if (ankieta.pytIII10 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII10e++;

  //     }
  //     if (ankieta.pytIII11 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII11a++;
  //     } else if (ankieta.pytIII11 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII11b++;
  //     } else if (ankieta.pytIII11 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII11c++;
  //     } else if (ankieta.pytIII11 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII11d++;
  //     } else if (ankieta.pytIII11 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII11e++;

  //     }
  //     if (ankieta.pytIII12 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII12a++;
  //     } else if (ankieta.pytIII12 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII12b++;
  //     } else if (ankieta.pytIII12 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII12c++;
  //     } else if (ankieta.pytIII12 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII12d++;
  //     } else if (ankieta.pytIII12 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII12e++;

  //     }
  //     if (ankieta.pytIII13 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII13a++;
  //     } else if (ankieta.pytIII13 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII13b++;
  //     } else if (ankieta.pytIII13 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII13c++;
  //     } else if (ankieta.pytIII13 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII13d++;
  //     } else if (ankieta.pytIII13 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII13e++;

  //     }
  //     if (ankieta.pytIII14 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII14a++;
  //     } else if (ankieta.pytIII14 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII14b++;
  //     } else if (ankieta.pytIII14 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII14c++;
  //     } else if (ankieta.pytIII14 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII14d++;
  //     } else if (ankieta.pytIII14 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII14e++;

  //     }
  //     if (ankieta.pytIII15 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII15a++;
  //     } else if (ankieta.pytIII15 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII15b++;
  //     } else if (ankieta.pytIII15 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII15c++;
  //     } else if (ankieta.pytIII15 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII15d++;
  //     } else if (ankieta.pytIII15 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII15e++;

  //     }
  //     if (ankieta.pytIII16 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII16a++;
  //     } else if (ankieta.pytIII16 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII16b++;
  //     } else if (ankieta.pytIII16 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII16c++;
  //     } else if (ankieta.pytIII16 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII16d++;
  //     } else if (ankieta.pytIII16 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII16e++;

  //     }
  //     if (ankieta.pytIII17 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII17a++;
  //     } else if (ankieta.pytIII17 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII17b++;
  //     } else if (ankieta.pytIII17 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII17c++;
  //     } else if (ankieta.pytIII17 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII17d++;
  //     } else if (ankieta.pytIII17 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII17e++;

  //     }

  //     if (ankieta.pytIII18 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII18a++;
  //     } else if (ankieta.pytIII18 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII18b++;
  //     } else if (ankieta.pytIII18 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII18c++;
  //     } else if (ankieta.pytIII18 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII18d++;
  //     } else if (ankieta.pytIII18 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII18e++;

  //     }

  //     if (ankieta.pytIII19 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII19a++;
  //     } else if (ankieta.pytIII19 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII19b++;
  //     } else if (ankieta.pytIII19 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII19c++;
  //     } else if (ankieta.pytIII19 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII19d++;
  //     } else if (ankieta.pytIII19 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII19e++;

  //     }
  //     if (ankieta.pytIII20 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII20a++;
  //     } else if (ankieta.pytIII20 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII20b++;
  //     } else if (ankieta.pytIII20 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII20c++;
  //     } else if (ankieta.pytIII20 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII20d++;
  //     } else if (ankieta.pytIII20 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII20e++;

  //     }
  //     if (ankieta.pytIII21 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII21a++;
  //     } else if (ankieta.pytIII21 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII21b++;
  //     } else if (ankieta.pytIII21 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII21c++;
  //     } else if (ankieta.pytIII21 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII21d++;
  //     } else if (ankieta.pytIII21 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII21e++;

  //     }
  //     if (ankieta.pytIII22 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII22a++;
  //     } else if (ankieta.pytIII22 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII22b++;
  //     } else if (ankieta.pytIII22 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII22c++;
  //     } else if (ankieta.pytIII22 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII22d++;
  //     } else if (ankieta.pytIII22 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII22e++;

  //     }
  //     if (ankieta.pytIII23 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII23a++;
  //     } else if (ankieta.pytIII23 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII23b++;
  //     } else if (ankieta.pytIII23 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII23c++;
  //     } else if (ankieta.pytIII23 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII23d++;
  //     } else if (ankieta.pytIII23 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII23e++;

  //     }
  //     if (ankieta.pytIII24 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII24a++;
  //     } else if (ankieta.pytIII24 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII24b++;
  //     } else if (ankieta.pytIII24 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII24c++;
  //     } else if (ankieta.pytIII24 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII24d++;
  //     } else if (ankieta.pytIII24 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII24e++;

  //     }
  //     if (ankieta.pytIII25 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII25a++;
  //     } else if (ankieta.pytIII25 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII25b++;
  //     } else if (ankieta.pytIII25 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII25c++;
  //     } else if (ankieta.pytIII25 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII25d++;
  //     } else if (ankieta.pytIII25 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII25e++;

  //     }
  //     if (ankieta.pytIII26 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII26a++;
  //     } else if (ankieta.pytIII26 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII26b++;
  //     } else if (ankieta.pytIII26 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII26c++;
  //     } else if (ankieta.pytIII26 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII26d++;
  //     } else if (ankieta.pytIII26 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII26e++;

  //     }
  //     if (ankieta.pytIII27 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII27a++;
  //     } else if (ankieta.pytIII27 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII27b++;
  //     } else if (ankieta.pytIII27 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII27c++;
  //     } else if (ankieta.pytIII27 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII27d++;
  //     } else if (ankieta.pytIII27 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII27e++;

  //     }
  //     if (ankieta.pytIII28 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII28a++;
  //     } else if (ankieta.pytIII28 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII28b++;
  //     } else if (ankieta.pytIII28 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII28c++;
  //     } else if (ankieta.pytIII28 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII28d++;
  //     } else if (ankieta.pytIII28 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII28e++;

  //     }
  //     if (ankieta.pytIII29 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII29a++;
  //     } else if (ankieta.pytIII29 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII29b++;
  //     } else if (ankieta.pytIII29 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII29c++;
  //     } else if (ankieta.pytIII29 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII29d++;
  //     } else if (ankieta.pytIII29 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII29e++;

  //     }
  //     if (ankieta.pytIII30 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII30a++;
  //     } else if (ankieta.pytIII30 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII30b++;
  //     } else if (ankieta.pytIII30 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII30c++;
  //     } else if (ankieta.pytIII30 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII30d++;
  //     } else if (ankieta.pytIII30 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII30e++;

  //     }
  //     if (ankieta.pytIII31 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII31a++;
  //     } else if (ankieta.pytIII31 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII31b++;
  //     } else if (ankieta.pytIII31 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII31c++;
  //     } else if (ankieta.pytIII31 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII31d++;
  //     } else if (ankieta.pytIII31 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII31e++;

  //     }
  //     if (ankieta.pytIII32 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII32a++;
  //     } else if (ankieta.pytIII32 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII32b++;
  //     } else if (ankieta.pytIII32 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII32c++;
  //     } else if (ankieta.pytIII32 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII32d++;
  //     } else if (ankieta.pytIII32 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII32e++;

  //     }
  //     if (ankieta.pytIII33 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII33a++;
  //     } else if (ankieta.pytIII33 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII33b++;
  //     } else if (ankieta.pytIII33 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII33c++;
  //     } else if (ankieta.pytIII33 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII33d++;
  //     } else if (ankieta.pytIII33 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII33e++;

  //     }
  //     if (ankieta.pytIII34 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII34a++;
  //     } else if (ankieta.pytIII34 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII34b++;
  //     } else if (ankieta.pytIII34 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII34c++;
  //     } else if (ankieta.pytIII34 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII34d++;
  //     } else if (ankieta.pytIII34 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII34e++;

  //     }
  //     if (ankieta.pytIII35 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII35a++;
  //     } else if (ankieta.pytIII35 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII35b++;
  //     } else if (ankieta.pytIII35 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII35c++;
  //     } else if (ankieta.pytIII35 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII35d++;
  //     } else if (ankieta.pytIII35 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII35e++;

  //     }
  //     if (ankieta.pytIII36 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII36a++;
  //     } else if (ankieta.pytIII36 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII36b++;
  //     } else if (ankieta.pytIII36 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII36c++;
  //     } else if (ankieta.pytIII36 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII36d++;
  //     } else if (ankieta.pytIII36 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII36e++;

  //     }
  //     if (ankieta.pytIII37 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII37a++;
  //     } else if (ankieta.pytIII37 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII37b++;
  //     } else if (ankieta.pytIII37 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII37c++;
  //     } else if (ankieta.pytIII37 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII37d++;
  //     } else if (ankieta.pytIII37 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII37e++;

  //     }
  //     if (ankieta.pytIII38 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII38a++;
  //     } else if (ankieta.pytIII38 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII38b++;
  //     } else if (ankieta.pytIII38 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII38c++;
  //     } else if (ankieta.pytIII38 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII38d++;
  //     } else if (ankieta.pytIII38 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII38e++;

  //     }
  //     if (ankieta.pytIII39 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII39a++;
  //     } else if (ankieta.pytIII39 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII39b++;
  //     } else if (ankieta.pytIII39 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII39c++;
  //     } else if (ankieta.pytIII39 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII39d++;
  //     } else if (ankieta.pytIII39 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII39e++;

  //     }
  //     if (ankieta.pytIII40 === 'zdecydowanie się zgadzam') {
  //       this.ankietaStatystyka.pytIII40a++;
  //     } else if (ankieta.pytIII40 === 'zgadzam się') {
  //       this.ankietaStatystyka.pytIII40b++;
  //     } else if (ankieta.pytIII40 === 'nie mam zdania') {
  //       this.ankietaStatystyka.pytIII40c++;
  //     } else if (ankieta.pytIII40 === 'nie zgadzam się') {
  //       this.ankietaStatystyka.pytIII40d++;
  //     } else if (ankieta.pytIII40 === 'zdecydowanie się nie zgadzam') {
  //       this.ankietaStatystyka.pytIII40e++;

  //     }



  //   });

  // }


}
