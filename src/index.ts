import { registerPlugin } from '@capacitor/core';

import type { SystemSettingsPluginPlugin } from './definitions';

const SystemSettingsPlugin = registerPlugin<SystemSettingsPluginPlugin>(
  'SystemSettingsPlugin',
  {
    web: () => import('./web').then(m => new m.SystemSettingsPluginWeb()),
  },
);

export * from './definitions';
export { SystemSettingsPlugin };
