import { useEffect } from 'react';
import {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export function usePulseAnimatedStyle(delay: number) {
  const animation = useSharedValue(0);

  useEffect(() => {
    animation.value = withDelay(
      delay,
      withRepeat(withTiming(1, { duration: 2000, easing: Easing.linear }), -1, false)
    );
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(animation.value, [0, 1], [0.6, 0], Extrapolate.CLAMP);
    return { opacity: opacity, transform: [{ scale: animation.value }] };
  });

  return animatedStyles;
}
