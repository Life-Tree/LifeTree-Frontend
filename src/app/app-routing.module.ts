import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenido',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./view/pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'bienvenido',
    loadChildren: () => import('./view/pages/bienvenido/bienvenido.module').then( m => m.BienvenidoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./view/pages/authPages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio-admin',
    loadChildren: () => import('./view/pages/inicio-admin/inicio-admin.module').then( m => m.InicioAdminPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./view/pages/reportPages/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'instructivos',
    loadChildren: () => import('./view/pages/instructivos/instructivos.module').then( m => m.InstructivosPageModule)
  },
  {
    path: 'reportsMap',
    loadChildren: () => import('./view/pages/reportPages/reportsMap/reportsMap.module').then( m => m.ReportsMapPageModule)
  },
  {
    path: 'reportList',
    loadChildren: () => import('./view/pages/reportPages/reportList/reportList.module').then( m => m.ReportListPageModule)
  },
  {
    path: 'reportDetail',
    loadChildren: () => import('./view/pages/reportPages/reportDetail/reportDetail.module').then( m => m.ReportDetailPageModule)
  },
  {
    path: 'intructivo-intervenciones',
    loadChildren: () => import('./view/pages/intructivo-intervenciones/intructivo-intervenciones.module').then( m => m.IntructivoIntervencionesPageModule)
  },
  {
    path: 'especies-modal',
    loadChildren: () => import('./view/pages/especies-modal/especies-modal.module').then( m => m.EspeciesModalPageModule)
  },
  {
    path: 'reportStatistics',
    loadChildren: () => import('./view/pages/reportPages/reportStatistics/reportStatistics.module').then( m => m.ReportStatisticsModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
