import colors from '@/packages/shared/theme/colors';
import { getColorAlpha } from '@/packages/shared/utils/colorAlpha';

const theme = {
  card: {
    background: colors.white,
    shadow: colors.secondaryWhite,
    title: colors.secondaryPurple,
  },
  filterItem: {
    background: getColorAlpha(colors.black, 0.2),
    title: colors.white,
  },
  icons: {
    headerCross: colors.gray,
  },
};

export default theme;
