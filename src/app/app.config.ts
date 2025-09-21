import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import {provideAnimations} from '@angular/platform-browser/animations';
import {HttpClient, provideHttpClient, withFetch} from '@angular/common/http';
import {provideTranslateService, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {provideTranslateHttpLoader, TranslateHttpLoader} from '@ngx-translate/http-loader';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideTranslateService({
      // v17 uses “fallback” terminology
      fallbackLang: 'en',
      // optional: start with this language in memory (you can also call translate.use(...) at runtime)
      // initialLang: 'en',

      // 👇 Configure the HTTP loader here (prefix/suffix/path)
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/',
        suffix: '.json',
        // extras available in v17:
        // enforceLoading: true,   // cache-busting
        // useHttpBackend: true    // bypass interceptors
      })
    })
  ]
};
