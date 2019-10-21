import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { withRoute } from './hoc';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: withRoute(DashboardPageComponent)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
