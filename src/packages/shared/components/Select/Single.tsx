import { memo, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import Option from './Option';

const styles = StyleSheet.create((theme, { insets }) => ({
  root: {
    rowGap: 8,
    columnGap: 8,
  },
  content: {
    gap: 6,
    paddingBottom: insets.bottom + 12,
  },
}));

interface SingleSelectProps<T> {
  options: T[];
  onValueChange: (value: string) => void;
  value?: string;
}

const Single = ({ options, onValueChange, value }: SingleSelectProps<string>) => {
  const renderItem = useCallback<ListRenderItem<string>>(
    ({ item }) => (
      <Option
        value={item}
        title={item}
        selected={value === item}
        onPress={onValueChange}
        key={item}
      />
    ),
    [onValueChange, value]
  );

  return (
    <FlatList
      style={styles.root}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
      data={options}
      renderItem={renderItem}
    />
  );
};

export default memo(Single);
