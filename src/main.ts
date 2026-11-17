import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';

/**
 * After a deploy, a tab may still hold an old main/chunk graph. Lazy routes then
 * 404/500 on deleted hashes. One hard reload picks up the new HTML entrypoints.
 */
function installChunkLoadRecovery(): void {
  const reloadKey = 'sdt_chunk_reload';
  const isChunkFailure = (reason: unknown): boolean => {
    const msg = String(
      reason instanceof Error ? reason.message : (reason ?? ''),
    );
    return /Failed to fetch dynamically imported module|Loading chunk [\w-]+ failed|error loading dynamically imported module|Importing a module script failed/i.test(
      msg,
    );
  };

  window.addEventListener('unhandledrejection', (event) => {
    if (!isChunkFailure(event.reason)) {
      return;
    }
    if (sessionStorage.getItem(reloadKey)) {
      return;
    }
    sessionStorage.setItem(reloadKey, '1');
    window.location.reload();
  });
}

installChunkLoadRecovery();
bootstrapApplication(AppComponent, appConfig);
