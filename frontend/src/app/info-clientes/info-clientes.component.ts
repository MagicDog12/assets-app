import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api-service.service';
import { CommonModule } from '@angular/common';
import { Cliente } from '../interfaces/client.interface'

@Component({
  selector: 'app-info-clientes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './info-clientes.component.html',
  styleUrl: './info-clientes.component.css'
})
export class InfoClientesComponent implements OnInit {

  public data: Cliente[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getClientes().subscribe({
      next: (response: Cliente[]) => {
        this.data = response;
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
      complete: () => {
        console.log('Data fetch complete');
      }
    });
  }
}
