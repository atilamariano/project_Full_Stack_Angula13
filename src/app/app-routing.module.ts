import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirtsComponentComponent } from './components/firts-component/firts-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { NewListComponent } from './components/new-list/new-list.component';

const routes: Routes = [
    { path: '', component: FirtsComponentComponent },
    { path: 'list', component: ListRenderComponent },
    { path: 'film', component: NewListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
