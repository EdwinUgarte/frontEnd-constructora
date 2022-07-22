import { Pipe, PipeTransform } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { Empleado } from '../components/empleados/empleado';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(lista: Empleado[], texto: string): Empleado[] {
    if (!texto) {
      return lista;
    }
    return lista.filter((lista) =>
      lista.nombre.toUpperCase().includes(texto.toUpperCase())
    );
  }
}
