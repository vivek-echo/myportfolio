import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SayHelloComponent } from './sayHello/say-hello.component';

const routes: Routes = [
  {path : "" , component:PortfolioComponent},
  {path : "sayHello", component: SayHelloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
