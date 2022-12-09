import { useRef } from 'react';
import { Animated } from 'react-native';

export function useFadeInAnimation() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  function fadeIn() {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  return {
    fadeAnimation,
    fadeIn: () => fadeIn(),
  };
}
