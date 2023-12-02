export interface SystemSettingsPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
