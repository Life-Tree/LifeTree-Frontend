import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenido',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./view/pages/commonPages/home/inicio.module').then( m => m.InicioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'bienvenido',
    loadChildren: () => import('./view/pages/commonPages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./view/pages/authPages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./view/pages/reportPages/report/report.module').then( m => m.ReportPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reportsMap',
    loadChildren: () => import('./view/pages/reportPages/reportsMap/reportsMap.module').then( m => m.ReportsMapPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reportList',
    loadChildren: () => import('./view/pages/reportPages/reportList/reportList.module').then( m => m.ReportListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reportDetail',
    loadChildren: () => import('./view/pages/reportPages/reportDetail/reportDetail.module').then( m => m.ReportDetailPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'especies-modal',
    loadChildren: () => import('./view/pages/reportPages/especies-modal/especies-modal.module').then( m => m.EspeciesModalPageModule)
  },
  {
    path: 'reportStatistics',
    loadChildren: () => import('./view/pages/reportPages/reportStatistics/reportStatistics.module').then( m => m.ReportStatisticsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'managementMaterial/:id',
    loadChildren: () => import('./view/pages/pedagogicPages/managementMaterial/managementMaterial.module').then( m => m.ManagementMaterialPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'listMaterial',
    loadChildren: () => import('./view/pages/pedagogicPages/listMaterial/listMaterial.module').then( m => m.ListMaterialPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'materialDetail/:id',
    loadChildren: () => import('./view/pages/pedagogicPages/materialDetail/materialDetail.module').then( m => m.MaterialDetailPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'singup',
    loadChildren: () => import('./view/pages/authPages/signup/singup.module').then( m => m.SingupPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
