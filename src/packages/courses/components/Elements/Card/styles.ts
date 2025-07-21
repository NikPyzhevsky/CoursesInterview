import { StyleSheet } from 'react-native-unistyles';

export const CARD_WIDTH = 210;

export const styles = StyleSheet.create((theme) => ({
  root: {
    borderRadius: 24,
    alignItems: 'center',
    backgroundColor: theme.courses.card.background,
    width: CARD_WIDTH,
    height: 198,
    boxShadow: `0px 6px 0px 0px ${theme.courses.card.shadow}`,
  },
  image: (color: string) => ({
    height: 162,
    width: CARD_WIDTH,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: color,
  }),
  title: {
    marginVertical: 'auto',
    color: theme.courses.card.title,
  },
}));
