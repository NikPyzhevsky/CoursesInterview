import { type FC, useCallback } from 'react';
import { ListRenderItem, View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';

import { useCourses } from '@/app/screens/Main/Courses/useCourses';
import Card from '@/packages/courses/components/Elements/Card/Card';
import FilterItem from '@/packages/courses/components/Elements/FilterItem/FilterItem';
import { ICourse } from '@/packages/courses/models/repository/Courses';

import { styles } from './styles';

const keyExtractor = (item: ICourse) => item.id;

const Courses: FC = () => {
  const { snapInterval, courses, onPress, tag, ref } = useCourses();

  const renderItem = useCallback<ListRenderItem<ICourse>>(({ item }) => {
    return <Card color={item.bgColor} name={item.name} imageUrl={item.image} />;
  }, []);

  return (
    <View style={styles.root}>
      <Animated.FlatList
        ref={ref}
        horizontal
        itemLayoutAnimation={LinearTransition}
        snapToInterval={snapInterval}
        contentContainerStyle={styles.content}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        data={courses}
        renderItem={renderItem}
      />
      <FilterItem value={tag} onPress={onPress} style={styles.filter} />
    </View>
  );
};

export default Courses;
