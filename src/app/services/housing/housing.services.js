"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HousingService = /** @class */ (function () {
    function HousingService() {
        this.housings = [
            {
                id: 1,
                title: 'New York',
                image: 'media/nodes/13.jpg',
                price_total: '55000',
                price_perday: '400',
                price_permonth: '3000',
                description: 'Many updates completed, but a few things still left to do. Property has small fenced area with detached garage and shed. Utility basement for furnace, water heater and pump. Master bedroom and bath do not have heat.',
                location: {
                    latitude: "40° 44' 34.692' N",
                    longitude: "73° 59' 19.248' W"
                },
                address: '202 5th Ave, New York, NY 10010, USA',
                postdate: '01/02/1996',
                url: 'http://slaughterhouse.local/node/3',
                likes: '',
                social: []
            },
            {
                id: 2,
                title: 'New York',
                image: 'media/nodes/9.jpg',
                price_total: '55000',
                price_perday: '400',
                price_permonth: '3000',
                description: 'Many updates completed, but a few things still left to do. Property has small fenced area with detached garage and shed. Utility basement for furnace, water heater and pump. Master bedroom and bath do not have heat.',
                location: {
                    latitude: "40° 44' 34.692' N",
                    longitude: "73° 59' 19.248' W"
                },
                address: '202 5th Ave, New York, NY 10010, USA',
                postdate: '01/02/1996',
                url: 'http://slaughterhouse.local/node/2',
                likes: '',
                social: []
            },
            {
                id: 3,
                title: 'New York',
                image: 'media/nodes/7.jpg',
                price_total: '55000',
                price_perday: '400',
                price_permonth: '3000',
                description: 'Many updates completed, but a few things still left to do. Property has small fenced area with detached garage and shed. Utility basement for furnace, water heater and pump. Master bedroom and bath do not have heat.',
                location: {
                    latitude: "40° 44' 34.692' N",
                    longitude: "73° 59' 19.248' W"
                },
                address: '202 5th Ave, New York, NY 10010, USA',
                postdate: '01/02/1996',
                url: 'http://slaughterhouse.local/node/1',
                likes: '',
                social: []
            },
            {
                id: 4,
                title: 'New York',
                image: 'media/nodes/8.jpg',
                price_total: '55000',
                price_perday: '400',
                price_permonth: '3000',
                description: 'Many updates completed, but a few things still left to do. Property has small fenced area with detached garage and shed. Utility basement for furnace, water heater and pump. Master bedroom and bath do not have heat.',
                location: {
                    latitude: "40° 44' 34.692' N",
                    longitude: "73° 59' 19.248' W"
                },
                address: '202 5th Ave, New York, NY 10010, USA',
                postdate: '01/02/1996',
                url: 'http://slaughterhouse.local/node/0',
                likes: '',
                social: []
            },
        ];
    }
    HousingService.prototype.getHousings = function () {
        return this.housings;
    };
    HousingService = __decorate([
        core_1.Injectable()
    ], HousingService);
    return HousingService;
}());
exports.HousingService = HousingService;
//# sourceMappingURL=housing.services.js.map