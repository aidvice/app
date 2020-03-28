import { Platform } from 'react-native';

export const BASE_URL = (ENVIRONMENT) => {
  const URL = {
    LOCAL: Platform.OS === 'ios'
      ? 'http://localhost:7000/api'
      : 'http://10.2.17.22:7000/api',
    DEV: 'http://google.com',
  };

  return URL[ENVIRONMENT];
};
