import { FC, memo } from 'react';
import { View } from 'react-native';
import Image from 'react-native-fast-image';

import { Text } from '@/packages/shared/components';

import { styles } from './styles';

interface CardProps {
  color: string;
  name: string;
  imageUrl: string;
}

const Card: FC<CardProps> = ({ name, imageUrl, color }) => {
  return (
    <View style={styles.root}>
      <Image source={{ uri: imageUrl }} style={styles.image(color)} />
      <Text style={styles.title} variant="S.ExtraBold">
        {name}
      </Text>
    </View>
  );
};

export default memo(Card);
