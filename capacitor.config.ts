import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.copacitorTestProject.app',
  appName: 'copacitortestproject',
  webDir: 'dist',
  server: {
    url: 'http://192.168.0.17:3000/',
    cleartext: true
  }
};

export default config;
