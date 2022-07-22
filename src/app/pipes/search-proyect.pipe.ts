import { Pipe, PipeTransform } from '@angular/core';
import { Proyecto } from '../components/proyectos/proyecto';

@Pipe({
  name: 'searchProyect'
})
export class SearchProyectPipe implements PipeTransform {

  transform(lista: Proyecto[], texto: string): Proyecto[] {
    if (!texto) {
      return lista;
    }
    return lista.filter((lista) =>
    lista.cliente.toUpperCase().includes(texto.toUpperCase())
    );
  }
}
