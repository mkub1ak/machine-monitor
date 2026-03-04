import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './page-not-found-component.html',
  styles: ``,
})
export class PageNotFoundComponent {

}
