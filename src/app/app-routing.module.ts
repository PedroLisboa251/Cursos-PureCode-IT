import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'change-number', component: ChangeNumberComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'emitter', component: EmitterComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'if-render', component: IfRenderComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id', component: ItemDetailsComponent},
  {path: 'item-details', component: ItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
