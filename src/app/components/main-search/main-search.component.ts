import { Component } from "@angular/core";

@Component({
  selector: 'main-search',
  templateUrl: './main-search.component.html'
})

export class MainSearchComponent {
  showAlert() {
    alert("clicked");
  }
}
