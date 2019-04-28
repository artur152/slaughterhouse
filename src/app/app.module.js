"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var core_2 = require("angular2-google-maps/core");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var header_component_1 = require("./components/header/header.component");
var footer_component_1 = require("./components/footer/footer.component");
var home_component_1 = require("./components/home/home.component");
var main_search_component_1 = require("./components/main-search/main-search.component");
var not_found_component_1 = require("./components/not-found/not-found.component");
var housing_item_component_1 = require("./components/housing-item/housing-item.component");
var housings_component_1 = require("./components/housings/housings.component");
var housing_services_1 = require("./services/housing/housing.services");
var map_component_1 = require("./components/map/map.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routing,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCQNZF7YNN1_qDwhQHx3_w_hj3hv1xoELU&amp;libraries=places'
                })
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                main_search_component_1.MainSearchComponent,
                not_found_component_1.PageNotFoundComponent,
                housing_item_component_1.HousingItemComponent,
                housings_component_1.HousingsComponent,
                map_component_1.MapComponent
            ],
            providers: [
                housing_services_1.HousingService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map