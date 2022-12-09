import Animated from 'react-native-reanimated';
import { usePulseAnimatedStyle } from './hooks';

interface PulseProps {
  delay?: number;
}

export function Pulse({ delay = 0 }: PulseProps) {
  const animatedStyles = usePulseAnimatedStyle(delay);

  return (
    <Animated.View
      className="absolute bottom-[-32px] w-[100px] h-[100px] rounded-full border-4 border-pulse-border bg-pulse-bg"
      style={[animatedStyles]}
    />
  );
}
