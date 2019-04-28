import { Component } from "@angular/core";
import {HousingService} from "../../services/housing/housing.services";

@Component({
  selector: 'housings',
  templateUrl: './housings.component.html',
})

export class HousingsComponent {
  housings: Array<any>;
  constructor(private hs: HousingService) {
    this.housings = hs.getHousings();
  }
}
