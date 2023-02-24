import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateNews } from './pages/createNews/createNews';
import { Login } from './pages/login/login';
import { NewsListing } from './pages/news/newslisting';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }, 
  { path: 'newslisting', component: NewsListing },
  { path: 'createnews', component: CreateNews },
  { path: 'login', component: Login },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
