import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterComponent } from './pages/counter/counter.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      { path: 'counter', component: CounterComponent },
      { path: 'properties', component: PropertiesPageComponent },
      { path: 'user-info', component: UserInfoPageComponent },
      { path: '**', redirectTo: 'counter' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalsRoutingModule {}
