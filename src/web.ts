import { WebPlugin } from '@capacitor/core';

import type { CapacitorGoogleAnalyticsPlugin } from './definitions';

export class CapacitorGoogleAnalyticsWeb extends WebPlugin implements CapacitorGoogleAnalyticsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
