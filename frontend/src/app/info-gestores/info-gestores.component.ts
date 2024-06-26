import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api-service.service';
import { CommonModule } from '@angular/common';
import { Gestor } from '../interfaces/gestor.interface';
import { Cliente } from '../interfaces/client.interface';

@Component({
  selector: 'app-info-gestores',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './info-gestores.component.html',
  styleUrl: './info-gestores.component.css'
})
export class InfoGestoresComponent implements OnInit {
  public clientes: Cliente[] = [];
  public gestores: Gestor[] = [];
  public clienteActual: string = '';
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
    this.apiService.getGestoresByCliente(nombre).subscribe({
      next: (response: Gestor[]) => {
        this.gestores = response;
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
