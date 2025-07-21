import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';

import { MainScreenProps } from '@/app/models/navigation/main';
import { MAIN_ROUTE } from '@/app/routes/routes';
import { CARD_WIDTH } from '@/packages/courses/components/Elements/Card/styles';
import { useGetCourses } from '@/packages/courses/hooks/courses';

type ScreenProps = MainScreenProps<typeof MAIN_ROUTE.COURSES_SCREEN>;

export const useCourses = () => {
  const navigation = useNavigation<ScreenProps['navigation']>();
  const { params } = useRoute<ScreenProps['route']>();

  console.log(params);

  const { data } = useGetCourses(params?.tag);

  const snapInterval = useMemo(() => CARD_WIDTH + 18, []);

  const onPress = useCallback(() => {
    navigation.navigate(MAIN_ROUTE.FILTER_SCREEN, params);
  }, [navigation, params]);

  return {
    navigation,
    courses: data?.data,
    snapInterval,
    onPress,
  };
};
