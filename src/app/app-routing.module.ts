import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TestComponent } from './test/test.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path : "tt" , component:HomepageComponent},
  {path : "" , component:PortfolioComponent},
  {path : "test" , component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
