import { Routes } from '@angular/router';
import { InfoClientesComponent } from './info-clientes/info-clientes.component';
import { InfoGestoresComponent } from './info-gestores/info-gestores.component';
import { MontoTotalComponent } from './monto-total/monto-total.component';
import { AbonoTotalComponent } from './abono-total/abono-total.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'info-clientes', component: InfoClientesComponent },
    { path: 'info-gestores', component: InfoGestoresComponent },
    { path: 'monto-total', component: MontoTotalComponent },
    { path: 'abono-total', component: AbonoTotalComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
