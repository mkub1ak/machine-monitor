// Define Vue production globals to prevent build errors
declare global {
  var __VUE_PROD_DEVTOOLS__: boolean;
  var __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: boolean;
}

if (typeof window !== 'undefined') {
  (window as any).__VUE_PROD_DEVTOOLS__ = false;
  (window as any).__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
}

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
