import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
  root: {
    backgroundColor: theme.courses.filterItem.background,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 40,
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 5,
    gap: 3,
  },
  title: {
    marginVertical: 'auto',
    color: theme.courses.filterItem.title,
  },
}));
