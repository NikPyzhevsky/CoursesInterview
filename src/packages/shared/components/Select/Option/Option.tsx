import { type FC, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';

import Text from '@/packages/shared/components/Text';

import { styles } from './styles';

interface OptionProps {
  title: string;
  selected: boolean;
  onPress: (value: string) => void;
}

const Option: FC<OptionProps> = ({ title, selected, onPress }) => {
  styles.useVariants({ selected });

  const handleOption = useCallback(() => {
    onPress(title);
  }, [onPress, title]);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleOption}>
      <View style={styles.root}>
        <Text style={styles.selectedText} variant="S.ExtraBold">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Option;
