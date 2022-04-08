// 让 Angular v13 正常运行需要的 polyfill
import 'zone.js';

// Angular v13 框架核心模块
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const environment = {
  production: false
};

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
