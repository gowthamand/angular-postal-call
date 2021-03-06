import {Component} from '@angular/core';
import {PostalService} from './postal.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  posts: Array<any>;
  submit = false;

  constructor(private postalService: PostalService) {

  }

  public continueBtn(): any {
    const pocode: HTMLInputElement = document.getElementById('postalcode') as HTMLInputElement;
    if (pocode.value.toString().length === 6) {
      this.submit = true;
      console.log(pocode.value);
      this.postalService.getPosteData(pocode.value).subscribe(res => {
        this.submit = false;
        this.posts = res[0].PostOffice;
        console.log(res[0].PostOffice);
      });
    }
  }


}
