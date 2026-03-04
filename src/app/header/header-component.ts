import { Component, inject, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import './vue-header/vue-header.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header-component.html',
  styles: ``,
})
export class HeaderComponent {
  translate = inject(TranslateService);

  onLanguageChange(event: any) {
    this.translate.use(event.detail.language);
  }
}
