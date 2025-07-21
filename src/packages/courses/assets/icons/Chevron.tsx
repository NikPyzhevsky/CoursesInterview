import { FC } from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';
import { useUnistyles } from 'react-native-unistyles';

const SvgComponent: FC<SvgProps> = (props) => {
  const { theme } = useUnistyles();

  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Circle cx={9} cy={9} r={9} fill={theme.courses.filterItem.background} />
      <Path
        d="M5.539 7.615L9 11.077l3.462-3.462"
        stroke={theme.courses.filterItem.title}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SvgComponent;
