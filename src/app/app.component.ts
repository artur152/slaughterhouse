import { Component, OnInit  } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})

export class AppComponent  {
  name = 'Angular';

  public ngOnInit()
  {
    $(document).ready(function(){
      $(".logo").click(function(){
        var div = $(".blur");
        //div.animate({left: '100px'}, "slow");
      });
    });
  }
}
