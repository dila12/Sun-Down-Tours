import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';


export default function bootstrap() {
  return bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      provideServerRendering(),
    ],
  });
}