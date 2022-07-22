import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Proyecto } from '../proyecto';
import { ProyectosService } from '../proyectos.service';

@Component({
  selector: 'app-form',
  templateUrl: './formProyectos.component.html',
})
export class FormComponentProyecto implements OnInit {
  public proyecto: Proyecto = new Proyecto;

  constructor(
    private proyectoService : ProyectosService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarProyecto();
   
  }


  public create() : void {
    this.proyectoService.create(this.proyecto).subscribe((proyecto) => {
      this.router.navigate(['/proyectos']);
      Swal.fire('El ' +proyecto.titulo+ ' se ha guardado!', 'El proyecto se guardo con exito!', 'success');
    });
  }

  public update() : void {
    this.proyectoService.update(this.proyecto).subscribe((proyecto) => {
      this.router.navigate(['/proyectos']);
      Swal.fire('El ' +proyecto.titulo+ ' se ha actualizado!', 'El proyecto se actualizo con exito!', 'success');

    })
  }



  public cargarProyecto(): void{
    this.activateRouter.params.subscribe(params => {
      let id = params['id'];
      if(id){
    this.proyectoService.getProyectoById(id).subscribe((proyecto) => this.proyecto = proyecto);
      }
  
  })
  }

  
}
