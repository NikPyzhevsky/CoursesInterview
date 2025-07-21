import { forwardRef } from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { IText, type ITextColors } from '@/packages/shared/theme/theme';
import { FONT_VARIANTS, type Typography } from '@/packages/shared/utils/font';

export interface TextProps extends RNTextProps {
  color?: ITextColors;
  text?: string;
  variant?: Typography;
}

const getColorVariants = (text: IText): Record<ITextColors, { color: string }> => {
  return Object.entries(text).reduce(
    (acc, [key, value]) => {
      acc[key as ITextColors] = { color: value };
      return acc;
    },
    {} as Record<ITextColors, { color: string }>
  );
};

const styles = StyleSheet.create((theme) => ({
  root: {
    variants: {
      color: getColorVariants(theme.shared.text),
      variant: FONT_VARIANTS,
    },
  },
}));

const Text = forwardRef<RNText, TextProps>(
  ({ children, color = 'primary', style, text, variant = 'M', ...props }, ref) => {
    styles.useVariants({
      color,
      variant,
    });

    return (
      <RNText {...props} ref={ref} style={[styles.root, style]}>
        {text ?? children}
      </RNText>
    );
  }
);

Text.displayName = 'Text';

export default Text;
