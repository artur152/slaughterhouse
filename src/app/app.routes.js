"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var not_found_component_1 = require("./components/not-found/not-found.component");
var map_component_1 = require("./components/map/map.component");
var routes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'map',
        component: map_component_1.MapComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: not_found_component_1.PageNotFoundComponent
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
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map