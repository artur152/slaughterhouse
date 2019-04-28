import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/not-found/not-found.component";
import { MapComponent } from "./components/map/map.component";
import { PlaylistComponent } from "./components/video/video.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'video',
    component: PlaylistComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },



  {
    path: '**',
    component: PageNotFoundComponent
  }
  /*{
    path: 'buy',
    component: BuyComponent
  },
  {
    path: 'rent',
    component: RentComponent
  },
  {
    path: 'sell',
    component: SellComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'landlord',
    component: LandlordComponent
  },
  {
    path: 'agent',
    component: AgentComponent
  },
  {
    path: 'support-services',
    component: SupportServicesComponent
  },
  {
    path: 'home-design',
    component: HomeDesignComponent
  },
  {
    path: 'housing-item',
    component: HousingItemComponent
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'terms-of-use&privacy',
    component: TermsComponent
  },
  {
    path: '---',
    component: Component
  },
  {
    path: '---',
    component: Component
  },
  {
    path: '---',
    component: Component
  }*/
];

export const routing = RouterModule.forRoot(routes);
