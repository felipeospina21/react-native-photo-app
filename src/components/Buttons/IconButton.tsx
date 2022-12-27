import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

interface IconButtonProps {
  onPress: () => void;
  icon: ImageSourcePropType;
  a11y: {
    accessibilityLabel: string;
    accessibilityHint: string;
  };
}
export function IconButton({ onPress, icon, a11y }: IconButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row justify-center items-center m-auto absolute bottom-32 left-1/4 right-1/4"
      accessible
      {...a11y}
    >
      <Image source={icon} accessibilityIgnoresInvertColors />
    </TouchableOpacity>
  );
}
