import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/view/home/home.component';
import { HotelFormComponent } from './component/view/hotel/hotel-form/hotel-form.component';
import { HotelListComponent } from './component/view/hotel/hotel-list/hotel-list.component';
import { QuartoFormComponent } from './component/view/quarto/quarto-form/quarto-form.component';
import { QuartoListComponent } from './component/view/quarto/quarto-list/quarto-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hoteis', component: HotelListComponent },
  { path: 'hoteis/form', component: HotelFormComponent },
  { path: 'quartos', component: QuartoListComponent },
  { path: 'quartos/form', component: QuartoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
