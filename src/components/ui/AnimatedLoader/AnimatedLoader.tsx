import {
  AnimatedElementWrapper,
  Square,
  Rectangle,
  AnimationWrapper,
} from './AnimatedLoader.styled';

const defaultStyles = {
  animationColor: {
    from: '#009F4D',
    to: '#97D700',
  },
};

// const renderAnimatedRect = ({ duration = '2.5s', begin = '0s' }) => {
//   return (
//     <g>
//       <rect width="20" height="20" fill="blue" opacity="0" rx="1">
//         <animate
//           attributeName="y"
//           from="-15"
//           to="100"
//           dur={duration}
//           begin={begin}
//           repeatCount="indefinite"
//         />
//         <animate
//           attributeName="width"
//           values="10;20;10"
//           dur={duration}
//           repeatCount="indefinite"
//           begin={begin}
//         />
//         <animate
//           attributeName="height"
//           values="10;20;10"
//           dur={duration}
//           repeatCount="indefinite"
//           begin={begin}
//         />
//         <animate
//           attributeName="opacity"
//           values="0;1;0"
//           dur={duration}
//           repeatCount="indefinite"
//           begin={begin}
//         />
//       </rect>
//       {/*<rect width="80" height="20" fill="blue" opacity="0" rx="2" x="30">*/}
//       {/*  <animate*/}
//       {/*    attributeName="y"*/}
//       {/*    from="-15"*/}
//       {/*    to="100"*/}
//       {/*    dur={duration}*/}
//       {/*    begin={begin}*/}
//       {/*    repeatCount="indefinite"*/}
//       {/*  />*/}
//       {/*  <animate*/}
//       {/*    attributeName="width"*/}
//       {/*    values="20;80;20"*/}
//       {/*    dur={duration}*/}
//       {/*    repeatCount="indefinite"*/}
//       {/*    begin={begin}*/}
//       {/*  />*/}
//       {/*  <animate*/}
//       {/*    attributeName="height"*/}
//       {/*    values="10;20;10"*/}
//       {/*    dur={duration}*/}
//       {/*    repeatCount="indefinite"*/}
//       {/*    begin={begin}*/}
//       {/*  />*/}
//       {/*  <animate*/}
//       {/*    attributeName="opacity"*/}
//       {/*    values="0;1;0"*/}
//       {/*    dur={duration}*/}
//       {/*    repeatCount="indefinite"*/}
//       {/*    begin={begin}*/}
//       {/*  />*/}
//       {/*</rect>*/}
//     </g>
//   );
// };

// const Sample = (): JSX.Element => {
//   return (
//     <svg
//       width="300"
//       height="300"
//       viewBox="0 0 100 100"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       {renderAnimatedRect({})}
//       {renderAnimatedRect({ begin: '0.5s' })}
//       {renderAnimatedRect({ begin: '1s' })}
//       {renderAnimatedRect({ begin: '1.5s' })}
//       {renderAnimatedRect({ begin: '2s' })}
//
//       <circle r="10" fill="red" cx="50" cy="50">
//         <animate
//           attributeName="r"
//           // from="10"
//           // to="20"
//           values="20;10;20"
//           dur="2000ms"
//           // fill="freeze"
//           repeatCount="indefinite"
//         />
//       </circle>
//     </svg>
//   );
// };

export const AnimatedElement = () => (
  <AnimatedElementWrapper>
    <Square className="square-block" />
    <Rectangle className="rectangle-block" />
  </AnimatedElementWrapper>
);

export type AnimatedLoaderProps = {
  squareColor?: string;
  rectangleColor?: string;
  speed?: number;
  height?: number;
  blockHeight?: number;
  elementDelay?: number;
};

export const AnimatedLoader = ({
  squareColor,
  rectangleColor,
  speed = 2,
}: AnimatedLoaderProps): JSX.Element => {
  const gradientColor = `linear-gradient(90deg, ${defaultStyles.animationColor.from} 0%, ${defaultStyles.animationColor.to} 100%)`;

  return (
    <AnimationWrapper
      height={360}
      speed={speed}
      elementDelay={speed / 5}
      blockHeight={50}
      squareColor={squareColor || defaultStyles.animationColor.from}
      rectangleColor={rectangleColor || gradientColor}
    >
      <AnimatedElement />
      <AnimatedElement />
      <AnimatedElement />
      <AnimatedElement />
      <AnimatedElement />
    </AnimationWrapper>
  );
};
