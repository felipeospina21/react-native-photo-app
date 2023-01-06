import { Text, TouchableOpacity, View } from 'react-native';

export interface SecondaryButtonProps {
  onPress: () => void;
  text: string;
  a11y: {
    accessibilityLabel: string;
    accessibilityHint: string;
  };
}
export function SecondaryButton({ onPress, text, a11y }: SecondaryButtonProps) {
  return (
    <View className="w-4/5 py-2 border-none bg-button-primary rounded-md">
      <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center justify-center m-auto"
        accessibilityRole='button'
        accessible
        {...a11y}
      >
        <Text className="font-main text-white">{text}</Text>
      </TouchableOpacity>
    </View>
  );
}