import { WebPlugin } from '@capacitor/core';

import type { SystemSettingsPlugin } from './definitions';

export class SystemSettingsWeb
  extends WebPlugin
  implements SystemSettingsPlugin
{
  async getDeveloperOptions(): Promise<{ developerOptionsEnabled: boolean }> {
    return { developerOptionsEnabled: false };
  }

  async getNumberFormatInfo(): Promise<{ decimalSeparator: string; groupingSeparator: string }> {
    return {
      decimalSeparator: ".",
      groupingSeparator: ","
    };
  }
}
