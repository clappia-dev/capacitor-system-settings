import { WebPlugin } from '@capacitor/core';

import type { SystemSettingsPluginPlugin } from './definitions';

export class SystemSettingsPluginWeb
  extends WebPlugin
  implements SystemSettingsPluginPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
