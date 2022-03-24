export interface CapacitorGoogleAnalyticsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
