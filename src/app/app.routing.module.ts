import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OdczytComponent } from './components/odczyt/odczyt.component';
import { AnkietaComponent } from './components/ankieta/ankieta.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WyswietlAnkieteComponent } from './components/wyswietl-ankiete/wyswietl-ankiete.component';
import { WyswietlStatystykiComponent } from './components/wyswietl-statystyki/wyswietl-statystyki.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/ankieta1', pathMatch: 'full' },
    { path: 'ankieta1', component: AnkietaComponent },
    { path: 'odczytAnkiet', component: OdczytComponent },
    { path: 'wyswietlAnkiete/:id', component: WyswietlAnkieteComponent },
    { path: 'statystykiAnkiet', component: WyswietlStatystykiComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
