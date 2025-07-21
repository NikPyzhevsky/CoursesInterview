import { FONT_VARIANTS } from '@/packages/shared/utils/font';

import colors from './colors';

const theme = {
  button: {
    primary: {
      background: colors.gray,
    },
  },
  select: {
    background: {
      default: colors.white,
      selected: colors.green,
    },
    border: {
      default: colors.gray_secondary,
      selected: colors.green,
    },
    text: {
      default: colors.black,
      selected: colors.white,
    },
  },
  buttons: {
    main: {
      primary: {
        background: {
          default: colors.primary_500,
          disabled: colors.white,
          pressed: colors.primary_400,
        },
        loader: colors.white,
        title: {
          default: colors.white,
          disabled: colors.white,
          pressed: colors.white,
        },
      },
    },
  },
  text: {
    brand: colors.primary_500,
    primary: colors.black,
    white: colors.white,
  },
  textVariant: FONT_VARIANTS,
} as const;

type ITheme = typeof theme;

export type ITextColors = keyof ITheme['text'];
export type IText = ITheme['text'];
export type IButtonVariants = keyof ITheme['buttons']['main'];
export type IButtonSize = 'l' | 'm' | 's';

export default theme;
