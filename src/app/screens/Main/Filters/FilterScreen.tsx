import { type FC } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Text } from '@/packages/shared/components';
import Single from '@/packages/shared/components/Select';
import { useTranslation } from '@/packages/shared/hooks/translation';

import { useFilterScreen } from '@/app/screens/Main/Filters/useFilterScreen';
import HeaderCross from '@/packages/courses/assets/icons/HeaderCross';

import { styles } from './styles';

const FilterScreen: FC = () => {
  const { t } = useTranslation();
  const { onPress, tags, value, goBack } = useFilterScreen();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text color="primary" variant="S.ExtraBold">
          {t('filter.title')}
        </Text>

        <TouchableOpacity activeOpacity={0.8} style={styles.icon} onPress={goBack}>
          <HeaderCross />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Single value={value} options={tags ?? []} onValueChange={onPress} />
      </View>
    </View>
  );
};

export default FilterScreen;
