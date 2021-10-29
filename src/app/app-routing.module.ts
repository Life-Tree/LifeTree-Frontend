import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenido',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'bienvenido',
    loadChildren: () => import('./pages/bienvenido/bienvenido.module').then( m => m.BienvenidoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio-admin',
    loadChildren: () => import('./pages/inicio-admin/inicio-admin.module').then( m => m.InicioAdminPageModule)
  },
  {
    path: 'reportar',
    loadChildren: () => import('./pages/reportar/reportar.module').then( m => m.ReportarPageModule)
  },
  {
    path: 'intervenciones',
    loadChildren: () => import('./pages/intervenciones/intervenciones.module').then( m => m.IntervencionesPageModule)
  },
  {
    path: 'reportar-arbol',
    loadChildren: () => import('./pages/reportar-arbol/reportar-arbol.module').then( m => m.ReportarArbolPageModule)
  },
  {
    path: 'reportar-intervencion',
    loadChildren: () => import('./pages/reportar-intervencion/reportar-intervencion.module').then( m => m.ReportarIntervencionPageModule)
  },
  {
    path: 'instructivos',
    loadChildren: () => import('./pages/instructivos/instructivos.module').then( m => m.InstructivosPageModule)
  },
  {
    path: 'indicadores',
    loadChildren: () => import('./pages/indicadores/indicadores.module').then( m => m.IndicadoresPageModule)
  },
  {
    path: 'arboles-list',
    loadChildren: () => import('./pages/arboles-list/arboles-list.module').then( m => m.ArbolesListPageModule)
  },
  {
    path: 'intervencion-modal',
    loadChildren: () => import('./pages/intervencion-modal/intervencion-modal.module').then( m => m.IntervencionModalPageModule)
  },
  {
    path: 'arbol-modal',
    loadChildren: () => import('./pages/arbol-modal/arbol-modal.module').then( m => m.ArbolModalPageModule)
  },
  {
    path: 'intructivo-intervenciones',
    loadChildren: () => import('./pages/intructivo-intervenciones/intructivo-intervenciones.module').then( m => m.IntructivoIntervencionesPageModule)
  },  {
    path: 'especies-modal',
    loadChildren: () => import('./pages/especies-modal/especies-modal.module').then( m => m.EspeciesModalPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./pages/reports/reports.module').then( m => m.ReportsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
