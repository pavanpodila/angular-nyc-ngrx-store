import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

require('bootstrap/scss/bootstrap.scss');

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
