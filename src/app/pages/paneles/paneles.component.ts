import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-paneles',
  templateUrl: './paneles.component.html',
  styleUrls: ['./paneles.component.css']
})
export class PanelesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'respuestas', 'detalle'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('drawer') drawer!: MatSidenav;


  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  // Función para aplicar filtros
  applyFilter(filterValue: string) {
    if (filterValue === 'nombre') {
      this.dataSource.filterPredicate = (data, filter) => data.nombre.toLowerCase().includes(filter);
      this.dataSource.filter = 'Nombre'; // Filtrar por símbolo
    } else if (filterValue === 'respuestas') {
      this.dataSource.filterPredicate = (data, filter) => data.respuestas.toString().includes(filter);
      this.dataSource.filter = 'respuestas'; // Filtrar por peso
    }
  }

  // Función para limpiar el filtro
  clearFilter() {
    this.dataSource.filter = '';
  }
}

export interface PeriodicElement {
  id: number;
  nombre: string;
  respuestas: number;
  detalle: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1733782566879, nombre: 'Encuesta fideos', respuestas: 500, detalle: 'Más información' },
  { id: 1733782584631, nombre: 'Encuesta porotos', respuestas: 2000, detalle: 'Más información' },
  { id: 1733782602715, nombre: 'Encuesta Macarrones', respuestas: 700, detalle: 'Más información' },
  { id: 1733782613296, nombre: 'Encuesta Harinas', respuestas: 300, detalle: 'Más información' },
  { id: 1733782624567, nombre: 'Encuesta Aceites', respuestas: 200, detalle: 'Más información' },
];
