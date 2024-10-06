import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import path from "path";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ItemDetailsComponent } from "./components/item-details/item-details.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";


const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'list/:id', component: ItemDetailsComponent},
    { path: '', redirectTo: '/list/1', pathMatch: 'full' }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}