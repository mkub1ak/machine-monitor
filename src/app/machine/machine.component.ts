import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Pressure } from '../widgets/pressure/pressure';
import { Temperature } from '../widgets/temperature/temperature';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-machine',
  standalone: true,
  imports: [Pressure, Temperature, TranslatePipe],
  templateUrl: './machine.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachineComponent {

}
