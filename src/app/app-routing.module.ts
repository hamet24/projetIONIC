import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./compte/login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: "map",
    loadChildren: () => import("./map/map.module").then(m => m.MapPageModule)
  },
  {
    path: 'modifier/:id',
    loadChildren: () => import("./plats/modifier/modifier.module").then(m=>m.ModifierPageModule)
  }
  ,
  {
    path: "register",
    loadChildren: () =>
      import("./compte/register/register.module").then(
        m => m.RegisterPageModule
      )
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
