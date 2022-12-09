import Svg, { Path } from 'react-native-svg';

export function MenuSvg() {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 320 200"
      fill="none"
      style={{
        position: 'absolute',
        top: 0,
        opacity: 0.8,
      }}
    >
      <Path
        d="M1 69.3628C1 55.1363 11.3198 43.0105 25.3632 40.7359L262.165 2.38061C291.965 -2.44616 319 20.5618 319 50.7502V221H1V69.3628Z"
        fill="#462F99"
        fill-opacity="0.6"
        stroke="#A79FE1"
        stroke-width="2"
      />
    </Svg>
  );
}
