import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Proyecto } from './proyecto';
import { ProyectosService } from './proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent implements OnInit {
  
  handleSearch(value: string){
    console.log(value)
    this.filtro_valor = value
  }

  filtro_valor = ''

  listaProyectos : Proyecto[];

  constructor(private proyectoService : ProyectosService) { }

  ngOnInit(): void {

    this.proyectoService.getProyectos().subscribe(
      proyectos => this.listaProyectos = proyectos
    )

  }

  public delete(proyecto : Proyecto): void{
    Swal.fire({
      title: `Eliminar ${proyecto.titulo}`,
      text: 'Estas seguro de eliminar el proyecto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.proyectoService.delete(proyecto.id).subscribe(
          response => {
          this.listaProyectos = this.listaProyectos.filter(proyectoSeleccionado => proyectoSeleccionado !== proyecto)
          Swal.fire('Proyecto eliminado', 'El proyecto ha sido eliminado.', 'success');
        });
      }
    })
  }



}
