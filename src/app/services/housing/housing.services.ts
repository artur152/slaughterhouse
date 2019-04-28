import { Injectable } from '@angular/core';

@Injectable()

export class HousingService {
    housings: Array<any> = [
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
        {
            id: 5,
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
        {
            id: 6,
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
        {
            id: 7,
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
        {
            id: 8,
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
        {
            id: 9,
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

    getHousings() {
        return this.housings;
    }
}
