import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OdczytComponent } from './components/odczyt/odczyt.component';
import { AnkietaComponent } from './components/ankieta/ankieta.component';

const appRoutes: Routes = [
    { path: '', component: AnkietaComponent },
    { path: 'odczytAnkiet', component: OdczytComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}