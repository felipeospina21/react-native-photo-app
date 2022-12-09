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
    <View className="w-1/3 h-8 border bg-button-primary rounded-2xl border-slate-200">
      <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center justify-center m-auto"
        accessible
        {...a11y}
      >
        <Text className="font-bold text-white">{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
