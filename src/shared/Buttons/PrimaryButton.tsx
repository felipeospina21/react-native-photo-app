import { Text, TouchableOpacity, View } from 'react-native';

export interface PrimaryButtonProps {
  onPress: () => void;
  text: string;
  a11y: {
    accessibilityLabel: string;
    accessibilityHint: string;
  };
}
export function PrimaryButton({ onPress, text, a11y }: PrimaryButtonProps) {
  return (
    <View className="w-2/5 py-2 border-none bg-button-primary rounded-full">
      <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center justify-center m-auto"
        accessible
        {...a11y}
      >
        <Text className="font-secondary text-white text-lg">{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
