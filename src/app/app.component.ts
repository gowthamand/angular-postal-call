import {Component} from '@angular/core';
import {PostalService} from "./postal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  public posts: any;
  public submit = true
  constructor(private postalService: PostalService) {

  }

  continue() {
    this.submit = false
    const pocode: HTMLInputElement = document.getElementById('postalcode') as HTMLInputElement;
    if (pocode.value) {
      this.postalService.getPosteData(pocode.value).subscribe(res => {
        this.submit = true;
        this.posts = res[0].PostOffice;
        console.log(res[0].PostOffice);
      });
    }

  }
}


