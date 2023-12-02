export interface SystemSettingsPlugin {
  /**
   * Returns a map { developerOptionsEnabled: boolean } indicating whether the developer options are enabled.
   * In future, this will return more attributes related to the system settings.
   */
  getDeveloperOptions(): Promise<any>;
}
