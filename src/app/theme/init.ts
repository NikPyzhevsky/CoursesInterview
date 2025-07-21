import { StyleSheet } from 'react-native-unistyles';

import sharedTheme from '@/packages/shared/theme/theme';

import appTheme from '@/app/theme/theme';
import coursesTheme from '@/packages/courses/theme/theme';

export const initTheme = () => {
  StyleSheet.configure({
    settings: {
      adaptiveThemes: false,
    },
    themes: {
      primary: {
        app: appTheme,
        shared: sharedTheme,
        courses: coursesTheme,
      },
    },
  });
};
