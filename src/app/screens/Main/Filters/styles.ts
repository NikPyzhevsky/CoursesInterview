import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme, runtime) => ({
  header: {
    width: '100%',
    paddingTop: 24,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 24,
    top: 24,
  },
  contentContainer: {
    flex: 1,
  },
  root: {
    alignItems: 'center',
    backgroundColor: theme.app.background.secondary,
    flex: 1,
    paddingTop: runtime.insets.top,
    paddingHorizontal: runtime.insets.left,
  },
}));
