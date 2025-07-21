import Config from 'react-native-config';

import { version } from '../../../package.json';

const { STORAGE_ENCRYPTION_KEY, COURSES_BASE_URL, STORAGE_ID } = Config;

// env config is set here for avoiding rebuild
const config = {
  app: {
    version,
  },
  api: {
    courses: COURSES_BASE_URL || 'https://logiclike.com',
  },
  storage: {
    encryptionKey: STORAGE_ENCRYPTION_KEY || 'STORAGE_KEY',
    id: STORAGE_ID || 'STORAGE_ID',
  },
};

export default config;
