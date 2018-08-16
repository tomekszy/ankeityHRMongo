import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
// import { Observable } from 'rxjs/Observable';

=======
>>>>>>> 1fe924d745d458898a8e7d384b745ae2698ea7b9
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  combineChange
} from 'angularfire2/firestore';
<<<<<<< HEAD
=======
import { Observable } from 'rxjs/Observable';
>>>>>>> 1fe924d745d458898a8e7d384b745ae2698ea7b9

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
<<<<<<< HEAD
      console.log(this.ankietaObs);
    }
    return this.ankietaObs;
=======
      console.log(this.ankietaObs)
    }
    return this.ankietaObs
>>>>>>> 1fe924d745d458898a8e7d384b745ae2698ea7b9
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
<<<<<<< HEAD

  generateId(): string {
    const pushkey = this.afs.createId();
    return pushkey;
  }
=======

  generateId(): string {
    const pushkey = this.afs.createId();
    return pushkey;
  }

>>>>>>> 1fe924d745d458898a8e7d384b745ae2698ea7b9
}
