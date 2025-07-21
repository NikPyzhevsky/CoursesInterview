import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
  root: {
    minWidth: 336,
    paddingHorizontal: 18,
    paddingVertical: 15,
    borderWidth: 2,
    borderRadius: 40,
    variants: {
      selected: {
        true: {
          borderColor: theme.shared.select.border.selected,
          backgroundColor: theme.shared.select.background.selected,
        },
        false: {
          backgroundColor: theme.shared.select.background.default,
          borderColor: theme.shared.select.border.default,
        },
      },
    },
  },
  selectedOption: {
    borderWidth: 2,
  },
  selectedText: {
    variants: {
      selected: {
        true: {
          color: theme.shared.select.text.selected,
        },
        false: {
          color: theme.shared.select.text.default,
        },
      },
    },
  },
}));
