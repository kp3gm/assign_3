import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponentComponent } from './post/post-component/post-component.component';

const routes: Routes = [{
  path: 'post', component:PostComponentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
