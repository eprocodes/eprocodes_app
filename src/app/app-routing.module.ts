import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateNews } from './pages/createNews/createnews';
import { Login } from './pages/login/login';
import { NewsListing } from './pages/news/newslisting';
import { Chat } from './pages/chat/chat';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }, 
  { path: 'newslisting', component: NewsListing },
  { path: 'createnews', component: CreateNews },
  { path: 'login', component: Login },
  { path: 'chat', component: Chat },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
