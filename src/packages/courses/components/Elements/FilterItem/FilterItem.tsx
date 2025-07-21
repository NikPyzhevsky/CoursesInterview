import { FC, memo } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';

import { Text } from '@/packages/shared/components';
import { useTranslation } from '@/packages/shared/hooks/translation';

import Chevron from '@/packages/courses/assets/icons/Chevron';

import { styles } from './styles';

interface FilterItemProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const FilterItem: FC<FilterItemProps> = ({ onPress, style }) => {
  const { t } = useTranslation('courses');

  return (
    <Pressable onPress={onPress} style={[styles.root, style]}>
      <Text variant="S.ExtraBold" style={styles.title}>
        {t('badge')}
      </Text>
      <Chevron />
    </Pressable>
  );
};

export default memo(FilterItem);
