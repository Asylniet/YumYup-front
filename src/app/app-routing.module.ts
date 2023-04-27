import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent},
  { path: 'about', component: PostPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
