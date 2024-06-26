import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cliente } from '../interfaces/client.interface';
import { ApiService } from '../api-service.service';
import { Pago } from '../interfaces/pago.interface';
import { CommonModule } from '@angular/common';
import { Gestor } from '../interfaces/gestor.interface';

@Component({
  selector: 'app-monto-total',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './monto-total.component.html',
  styleUrl: './monto-total.component.css'
})
export class MontoTotalComponent {
  public gestores: Gestor[] = [];
  public gestorActual: string = '';
  public montoActual: number = 0;
  public show: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getGestores().subscribe({
      next: (response: Gestor[]) => {
        this.gestores = response;
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
      complete: () => {
        console.log('Data fetch complete');
      }
    });
  }

  update(nombre: string) {
    this.apiService.getPagosByGestor(nombre).subscribe({
      next: (response: Pago[]) => {
        const pagos = response;
        this.montoActual = 0;
        for (let index = 0; index < pagos.length; index++) {
          this.montoActual += pagos[index].abono;
        }
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
      complete: () => {
        console.log('Data fetch complete');
        this.gestorActual = nombre;
        this.show = true;
      }
    });
  }
}
