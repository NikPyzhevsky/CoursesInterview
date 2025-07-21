import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback } from 'react';

import { MainScreenProps } from '@/app/models/navigation/main';
import { MAIN_ROUTE } from '@/app/routes/routes';
import { useGetCourses } from '@/packages/courses/hooks/courses';

type ScreenProps = MainScreenProps<typeof MAIN_ROUTE.COURSES_SCREEN>;

export const useFilterScreen = () => {
  const navigation = useNavigation<ScreenProps['navigation']>();
  const { params } = useRoute<ScreenProps['route']>();
  const { data } = useGetCourses();

  const onPress = useCallback(
    (value: string) => {
      const tag = value === params?.tag ? undefined : value;

      navigation.popTo(MAIN_ROUTE.COURSES_SCREEN, {
        tag,
      });
    },
    [navigation, params?.tag]
  );

  return {
    onPress,
    value: params?.tag,
    goBack: navigation.goBack,
    tags: data?.tags,
  };
};
