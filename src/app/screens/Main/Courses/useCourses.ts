import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { FlatList } from 'react-native';

import { MainScreenProps } from '@/app/models/navigation/main';
import { MAIN_ROUTE } from '@/app/routes/routes';
import { CARD_WIDTH } from '@/packages/courses/components/Elements/Card/styles';
import { useGetCourses } from '@/packages/courses/hooks/courses';
import { ICourse } from '@/packages/courses/models/repository/Courses';

type ScreenProps = MainScreenProps<typeof MAIN_ROUTE.COURSES_SCREEN>;

export const useCourses = () => {
  const navigation = useNavigation<ScreenProps['navigation']>();
  const { params } = useRoute<ScreenProps['route']>();
  const ref = useRef<FlatList<ICourse>>(null);

  const { data } = useGetCourses(params?.tag);

  const snapInterval = useMemo(() => CARD_WIDTH + 18, []);

  useEffect(() => {
    if (!data) {
      return;
    }
    // handle android scrollView issue
    ref.current?.scrollToIndex({ index: 0 });
  }, [data]);

  const onPress = useCallback(() => {
    navigation.navigate(MAIN_ROUTE.FILTER_SCREEN, params);
  }, [navigation, params]);

  return {
    ref,
    navigation,
    courses: data?.data,
    tag: params?.tag,
    snapInterval,
    onPress,
  };
};
