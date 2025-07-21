import sharedTheme from '@/packages/shared/theme/theme';

import appTheme from '@/app/theme/theme';
import coursesTheme from '@/packages/courses/theme/theme';

type AppThemes = {
  primary: {
    app: typeof appTheme;
    shared: typeof sharedTheme;
    courses: typeof coursesTheme;
  };
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
