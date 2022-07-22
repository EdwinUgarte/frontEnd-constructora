import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from './empleado';
import { EmpleadoService } from './empleado.service';
import Swal from 'sweetalert2';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html'
})
export class EmpleadosComponent implements OnInit {
  
  handleSearch(value: string){
    console.log(value)
    this.filtro_valor = value
  }
  
  filtro_valor = ''

  listaEmpleados: Empleado[];

  constructor( private empleadoService: EmpleadoService, private router: Router, private activateRoute  : ActivatedRoute) { }

  ngOnInit(): void {
    
  this.empleadoService.getEmpleados().subscribe(
    empleados => this.listaEmpleados = empleados
  )


  }

  delete(empleado: Empleado): void {
    Swal.fire({
      title: `Eliminar a ${empleado.nombre}`,
      text: 'Estas seguro de eliminar al Empleado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoService.delete(empleado.id).subscribe(
          response => {
          this.listaEmpleados = this.listaEmpleados.filter(emp => emp !== empleado)
          Swal.fire('Empleado eliminado', 'El empleado ha sido eliminado.', 'success');
        });
      }
    })
    
  }



  

}
