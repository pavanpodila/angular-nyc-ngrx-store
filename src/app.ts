import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

require('bootstrap/scss/bootstrap-flex.scss');

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
