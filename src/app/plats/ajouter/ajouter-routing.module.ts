import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterPage } from './ajouter.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterPage
  }
  /*,
  {
    path: "listeplat",
    loadChildren: () =>
      import("../plats.module").then(m => m.Tab2PageModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterPageRoutingModule {}
