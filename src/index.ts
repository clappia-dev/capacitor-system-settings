import { registerPlugin } from '@capacitor/core';

import type { SystemSettingsPlugin } from './definitions';

const SystemSettings = registerPlugin<SystemSettingsPlugin>('SystemSettings', {
  web: () => import('./web').then(m => new m.SystemSettingsWeb()),
});

export * from './definitions';
export { SystemSettings };
