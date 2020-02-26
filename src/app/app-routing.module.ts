import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import {HerosComponent} from "./heros/heros.component"
import { CommonModule } from '@angular/common';


const routes:Routes=[
  { path: 'heroes', component: HerosComponent }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
