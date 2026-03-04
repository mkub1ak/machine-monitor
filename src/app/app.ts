import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header-component';
import { FooterComponent } from './footer/footer-component';
import { NavigationComponent } from "./navigation/navigation.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['en', 'pl']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
  }
}
