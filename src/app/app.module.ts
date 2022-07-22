import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmpleadoService } from './components/empleados/empleado.service';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FormComponent } from './components/empleados/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormComponentProyecto } from './components/proyectos/form/formProyectos.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchProyectPipe } from './pipes/search-proyect.pipe';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: InicioComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'empleados/form', component: FormComponent },
  { path: 'empleados/form/:id', component: FormComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyectos/form', component: FormComponentProyecto },
  { path: 'proyectos/form/:id', component: FormComponentProyecto},
];

@NgModule({
  declarations: [AppComponent, EmpleadosComponent, ProyectosComponent, FormComponentProyecto, FormComponent, SearchComponent, SearchPipe, HeaderComponent, InicioComponent, FooterComponent, SearchProyectPipe],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  providers: [EmpleadoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
