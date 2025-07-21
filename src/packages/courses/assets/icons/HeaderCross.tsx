import { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { useUnistyles } from 'react-native-unistyles';

const SvgComponent: FC<SvgProps> = (props) => {
  const { theme } = useUnistyles();

  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.172 5.05A1.5 1.5 0 005.05 7.172L8.878 11 5.05 14.828a1.5 1.5 0 102.122 2.122L11 13.12l3.828 3.829a1.5 1.5 0 102.121-2.122L13.121 11l3.828-3.828a1.5 1.5 0 10-2.121-2.122L11 8.88 7.172 5.05z"
        fill={theme.courses.icons.headerCross}
      />
    </Svg>
  );
};

export default SvgComponent;
