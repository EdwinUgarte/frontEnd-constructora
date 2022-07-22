import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import Swal from 'sweetalert2';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  public empleado: Empleado = new Empleado;

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarEmpleado();
  }


  public create() : void {
    this.empleadoService.crear(this.empleado).subscribe((empleado) => {
      this.router.navigate(['/empleados']);
      Swal.fire('Empleado ' +empleado.nombre+ ' guardado!', 'El usuario se guardo con exito!', 'success');
    });
  }


  public cargarEmpleado(): void{
    this.activateRouter.params.subscribe(params => {
      let id = params['id'];
      if(id){
    this.empleadoService.getEmpleadoById(id).subscribe((empleado) => this.empleado = empleado);
      }
  
  })
  }
  
  
  public update(): void{
    this.empleadoService.update(this.empleado).subscribe((empleado) => {
       this.router.navigate(['/empleados']);
       Swal.fire('Empleado ' + empleado.nombre +  ' Actualizado!', 'El usuario se actualizado con exito!', 'success');
    });
  }


  
}
