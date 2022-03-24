import { WebPlugin, registerPlugin } from '@capacitor/core';

export const CapacitorGoogleAnalytics = registerPlugin<CapacitorGoogleAnalyticsPlugin>(
  'CapacitorGoogleAnalytics',
  {
    web: () => import('./web').then(m => new m.CapacitorGoogleAnalyticsWeb()),
  },
);

export class CapacitorGoogleAnalyticsWeb extends WebPlugin implements CapacitorGoogleAnalyticsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

interface CapacitorGoogleAnalyticsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
