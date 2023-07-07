import { NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      redirectTo: '/form',
      pathMatch: 'full'
    },
    {
      path: 'form',
      loadChildren: () => import('./components/cye-form/cye-form.module').then(m => m.CyeFormModule)
    },
  ])],
  exports: [RouterModule],
})
export class CyeRoutingModule {
}
