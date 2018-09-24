import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnkietaService } from '../../services/ankieta.service';

@Component({
  selector: 'app-wyswietl-ankiete',
  templateUrl: './wyswietl-ankiete.component.html',
  styleUrls: ['./wyswietl-ankiete.component.css']
})
export class WyswietlAnkieteComponent implements OnInit {
  id: string;
  ankieta = {
    pytI1: '',
    pytI2a: false,
    pytI2b: false,
    pytI2c: false,
    pytI2d: false,
    pytI3a: false,
    pytI3b: false,
    pytI3c: false,
    pytI3d: false,
    pytII1: '',
    pytII2: '',
    pytII3: '',
    pytII4: '',
    pytII5: '',
    pytIII01: '',
    pytIII02: '',
    pytIII03: '',
    pytIII04: '',
    pytIII05: '',
    pytIII06: '',
    pytIII07: '',
    pytIII08: '',
    pytIII09: '',
    pytIII10: '',
    pytIII11: '',
    pytIII12: '',
    pytIII13: '',
    pytIII14: '',
    pytIII15: '',
    pytIII16: '',
    pytIII17: '',
    pytIII18: '',
    pytIII19: '',
    pytIII20: '',
    pytIII21: '',
    pytIII22: '',
    pytIII23: '',
    pytIII24: '',
    pytIII25: '',
    pytIII26: '',
    pytIII27: '',
    pytIII28: '',
    pytIII29: '',
    pytIII30: '',
    pytIII31: '',
    pytIII32: '',
    pytIII33: '',
    pytIII34: '',
    pytIII35: '',
    pytIII36: '',
    pytIII37: '',
    pytIII38: '',
    pytIII39: '',
    pytIII40: '',
    uwagi: '',
    aktualnaData: new Date()
  };

  constructor(
    private route: ActivatedRoute,
    private ankietaService: AnkietaService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);
    this.ankietaService.pobierzAnkiete(this.id).subscribe(ankieta => {
      this.ankieta = ankieta;
      // console.log(this.ankieta);
    });
  }

}
