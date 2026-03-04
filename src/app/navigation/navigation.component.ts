import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from "@angular/router";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, RouterLink, TranslatePipe],
  templateUrl: './navigation.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {

}
