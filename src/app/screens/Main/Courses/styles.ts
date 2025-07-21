import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme, { insets }) => ({
  content: {
    paddingLeft: insets.left,
    paddingRight: insets.right,
    gap: 18,
    flexGrow: 1,
    alignItems: 'center',
  },
  list: {
    flexGrow: 1,
  },
  root: {
    alignItems: 'center',
    backgroundColor: theme.app.background.primary,
    flex: 1,
    paddingTop: insets.top,
  },
  filter: {
    position: 'absolute',
    zIndex: 100,
    marginTop: 12,
  },
}));
