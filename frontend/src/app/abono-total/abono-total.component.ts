import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cliente } from '../interfaces/client.interface';
import { Gestor } from '../interfaces/gestor.interface';
import { ApiService } from '../api-service.service';
import { CommonModule } from '@angular/common';
import { Pago } from '../interfaces/pago.interface';

@Component({
  selector: 'app-abono-total',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './abono-total.component.html',
  styleUrl: './abono-total.component.css'
})
export class AbonoTotalComponent implements OnInit{
  public clientes: Cliente[] = [];
  public clienteActual: string = '';
  public montoActual: number = 0;
  public show: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getClientes().subscribe({
      next: (response: Cliente[]) => {
        this.clientes = response;
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
    this.apiService.getPagosByCliente(nombre).subscribe({
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
        this.clienteActual = nombre;
        this.show = true;
      }
    });
  }
}
