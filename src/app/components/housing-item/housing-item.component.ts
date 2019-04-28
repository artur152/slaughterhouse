import { Component, Input  } from "@angular/core";

@Component({
  selector: 'housing-item',
  templateUrl: './housing-item.component.html'
})

export class HousingItemComponent {
  @Input('housing') housing: Array<any>;
}
