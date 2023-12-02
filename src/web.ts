import { WebPlugin } from '@capacitor/core';

import type { SystemSettingsPlugin } from './definitions';

export class SystemSettingsWeb
  extends WebPlugin
  implements SystemSettingsPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  async getDeveloperOptions(): Promise<any> {
    return { developerOptionsEnabled: false };
  }
}
