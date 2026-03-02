import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';


export default function bootstrap(context: BootstrapContext) {
  return bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      provideServerRendering(),
      ...(appConfig.providers ?? [])
    ],
  }, context);
}