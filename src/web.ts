import { WebPlugin } from '@capacitor/core';

import type { SystemSettingsPlugin } from './definitions';

export class SystemSettingsWeb
  extends WebPlugin
  implements SystemSettingsPlugin
{
  async getDeveloperOptions(): Promise<{ developerOptionsEnabled: boolean }> {
    return { developerOptionsEnabled: false };
  }
}
