import { Component, OnInit, Inject } from '@angular/core';
import { AnkietaService } from '../../services/ankieta.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ankieta',
  templateUrl: './ankieta.component.html',
  styleUrls: ['./ankieta.component.css']
})
export class AnkietaComponent implements OnInit {
  ankieta: any;
  ankietaPusta = {
    pytI1: '',
    pytI2: [],
    pytI3: [],
    pytII1: '',
    pytII2: '',
    pytII3: '',
    pytII4: '',
    pytII5: '',
    pytIII1: '',
    pytIII2: '',
    pytIII3: '',
    pytIII4: '',
    pytIII5: '',
    pytIII6: '',
    pytIII7: '',
    pytIII8: '',
    pytIII9: '',
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
  id: string;
  idDoWpisu: string;
  czyZapisana: boolean;
  czyPoprzedniaAnkieta: boolean;
  czyZlaAnkieta: boolean;

  pytaniaI2 = [
    { value: 'wdrazajace-zasadyEKN', viewValue: 'wdrażające zasady Europejskiej Karty Naukowca' },
    { value: 'wdrazajace-zasadyKodeksu', viewValue: 'wdrażające zasady Kodeksu postępowania przy rekrutacji pracowników naukowych' },
    { value: 'zapewniajacenaukowcom', viewValue: 'zapewniające naukowcom atrakcyjne warunki pracy i rozwoju kariery' },
    { value: 'zatrudnijacepowyzej5', viewValue: 'zatrudniające powyżej 5 pracowników naukowych z zagranicy' }
  ];
  pytaniaI3 = [
    { value: 'stworzenieporadnika', viewValue: 'stworzenie poradnika pt.: „Stanowisko pracownika naukowego w MIR-PIB – ścieżki awansu, wymagania i korzyści”' },
    { value: 'przeprowadzenieszkolenia', viewValue: 'przeprowadzenie szkolenia pt. „Działania w ramach strategii Human Resources Strategy for Researchers”, mającego na celu wzmocnienie kadry kierowniczej (w tym kierowników projektów) w wiedzę <br> i narzędzia zwiększające efektywność doboru i rozwoju kadr (prowadząca M. Binkiewicz) wdrażające zasady Kodeksu postępowania przy rekrutacji pracowników naukowych' },
    { value: 'wprowadzeniedostopki', viewValue: 'wprowadzenie do stopki email oraz wzorów prezentacji Power Point znaku HR logo' },
    { value: 'zorganizowanieseminarium', viewValue: 'zorganizowanie seminarium nt. zarządzania własnością intelektualną i komercjalizacji wyników badań (przeprowadzone przez firmę CoWinners z Poznania; prowadzący dr Zbigniew Krzewiński). ' }
  ];
  form: FormGroup;

  constructor(
    private ankietaService: AnkietaService,
    // private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.ankieta = this.ankietaPusta;
    this.id = this.ankietaService.generateId();
    this.czyZapisana = false;
    this.czyPoprzedniaAnkieta = false;
    this.czyZlaAnkieta = false;
    // this.form = this.formBuilder.group({
    //   useremail: new FormArray([
    //     new FormControl('', Validators.required)
    //   ])
    // });
  }

  zapisz() {
    this.ankietaService.zapiszAnkiete(this.ankieta, this.id);
    this.czyZapisana = true;
  }

  pobierzAnkiete(id) {
    console.log(id);
    if (id === undefined) {
      this.ankieta = this.ankietaPusta;
      this.id = this.ankietaService.generateId();
      this.czyZlaAnkieta = true;
    } else {
      this.ankietaService.pobierzAnkiete(id).subscribe(ankieta => {
        if (ankieta === undefined) {
          this.ankieta = this.ankietaPusta;
          this.id = this.ankietaService.generateId();
          this.czyZlaAnkieta = true;
        } else {
          this.ankieta = ankieta;
          this.id = id;
          this.czyZlaAnkieta = false;
          this.czyPoprzedniaAnkieta = false;
        }
      });
    }
  }



}
