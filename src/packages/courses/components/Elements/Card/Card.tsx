import { FC, memo } from 'react';
import { View } from 'react-native';
import { NitroImage, useWebImage } from 'react-native-nitro-image';

import { Text } from '@/packages/shared/components';

import { styles } from './styles';

interface CardProps {
  color: string;
  name: string;
  imageUrl: string;
}

// NitroImage is replace for fastImage(not supported)
const Card: FC<CardProps> = ({ name, imageUrl, color }) => {
  const image = useWebImage(imageUrl);

  return (
    <View style={styles.root}>
      <NitroImage image={image} style={styles.image(color)} />
      <Text style={styles.title} variant="S.ExtraBold">
        {name}
      </Text>
    </View>
  );
};

export default memo(Card);
