import { Platform, type TextStyle } from 'react-native';

export type Typography =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'XL'
  | 'XL.Bold'
  | 'XL.SemiBold'
  | 'L'
  | 'L.Bold'
  | 'L.SemiBold'
  | 'M'
  | 'M.Bold'
  | 'M.SemiBold'
  | 'S'
  | 'S.Bold'
  | 'S.SemiBold'
  | 'S.ExtraBold'
  | 'Caption.M'
  | 'Caption.M.B';

export type FontWeight = '400' | '500' | '600' | '700' | '800';
type FontFamily = 'Inter' | 'Nunito';

const sourceBodyFont = Platform.OS === 'ios' ? 'Nunito' : 'Nunito';
const sourceHeaderFont = Platform.OS === 'ios' ? 'Inter' : 'Inter';

export const getFontStyleByWeight = (
  fontWeight: FontWeight,
  family: FontFamily,
  fontSize?: number,
  lineHeight?: number,
  fontStyle?: TextStyle['fontStyle']
) => {
  let fontFamily = family === 'Inter' ? sourceHeaderFont : sourceBodyFont;

  if (Platform.OS === 'android') {
    if (fontWeight === '400') {
      fontFamily += '-Regular';
    }
    if (fontWeight === '500') {
      fontFamily += '-Medium';
    }
    if (fontWeight === '600') {
      fontFamily += '-SemiBold';
    }
    if (fontWeight === '700') {
      fontFamily += '-Bold';
    }
    if (fontWeight === '800') {
      fontFamily += '-ExtraBold';
    }
  }

  return {
    fontFamily,
    fontSize,
    fontStyle: Platform.OS === 'android' ? undefined : fontStyle,
    fontWeight,
    lineHeight,
  };
};

export const FONT_VARIANTS = {
  'Caption.M': getFontStyleByWeight('400', 'Inter', 12, 16.8),
  'Caption.M.B': getFontStyleByWeight('700', 'Inter', 12, 12),
  H1: getFontStyleByWeight('600', 'Inter', 36, 38),
  H2: getFontStyleByWeight('600', 'Inter', 28, 32),
  H3: getFontStyleByWeight('600', 'Inter', 24, 26),
  H4: getFontStyleByWeight('600', 'Inter', 20, 22),
  H5: getFontStyleByWeight('600', 'Inter', 18, 20),
  XL: getFontStyleByWeight('400', 'Inter', 20, 28),
  'XL.Bold': getFontStyleByWeight('700', 'Inter', 20, 28),
  'XL.SemiBold': getFontStyleByWeight('600', 'Inter', 20, 28),
  L: getFontStyleByWeight('400', 'Inter', 18, 26),
  'L.Bold': getFontStyleByWeight('700', 'Inter', 18, 26),
  'L.SemiBold': getFontStyleByWeight('600', 'Inter', 18, 26),
  M: getFontStyleByWeight('400', 'Inter', 16, 22.4),
  'M.Bold': getFontStyleByWeight('700', 'Inter', 16, 22.4),
  'M.SemiBold': getFontStyleByWeight('600', 'Inter', 16, 22.4),
  S: getFontStyleByWeight('400', 'Nunito', 14, 20),
  'S.Bold': getFontStyleByWeight('700', 'Nunito', 14, 20),
  'S.SemiBold': getFontStyleByWeight('600', 'Nunito', 14, 20),
  'S.ExtraBold': getFontStyleByWeight('800', 'Nunito', 14, 20),
} satisfies Record<Typography, TextStyle>;
