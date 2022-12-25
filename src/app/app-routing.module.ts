import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { VotingPageComponent } from './voting-page/voting-page.component';

const routes: Routes = [
  { path:'voting-page',component:VotingPageComponent},
   {path:'',component:LoginPageComponent},
   {path:'register-page',component:RegisterPageComponent},
   {path:'admin-page',component:AdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  