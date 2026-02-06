import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'min-cap',
  webDir: 'out/app',
  android: {
    path: 'src/android/capacitor',
  },
};

export default config;
