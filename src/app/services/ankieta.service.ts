import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  combineChange
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AnkietaService {
  ankietaCollection: AngularFirestoreCollection<any>;
  ankietyObs: Observable<any[]>;
  ankietaObs: Observable<any>;
  ankietaDoc: AngularFirestoreDocument<any>;
  aktualnaData: Date;

  constructor(private afs: AngularFirestore) {
  }

  pobierzAnkiety() {
    this.ankietyObs = this.afs
      .collection('Ankiety')
      .valueChanges();
  }

  pobierzAnkiete(id) {
    this.ankietaObs = this.afs
      .collection('Ankiety')
      .doc(id)
      .valueChanges();
    if (this.ankietaObs === undefined) {
      console.log(this.ankietaObs)
    }
    return this.ankietaObs
  }

  zapiszAnkiete(ankieta, id) {
    this.afs
      .collection('Ankiety')
      .doc(id)
      .set(ankieta);
  }

  poprawAnkiete(ankieta, id) {
    this.afs
      .collection('Ankiety')
      .doc(id)
      .update(ankieta);
  }

  usunAnkiete(id) {
    this.afs
      .collection('Ankiety')
      .doc(id)
      .delete();
  }

  generateId(): string {
    const pushkey = this.afs.createId();
    return pushkey;
  }

}
