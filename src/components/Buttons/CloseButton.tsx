import { Pressable, Text } from 'react-native';

interface CloseButtonProps {
  handleClose: () => void;
  color?: string;
}

export function CloseButton({ handleClose, color = 'black' }: CloseButtonProps) {
  return (
    <Pressable
      className="absolute top-10 right-10"
      onPress={handleClose}
      accessibilityLabel="close modal"
      accessibilityHint="click to close modal"
    >
      <Text className="text-xl font-secondary_bold" style={{ color }}>
        X
      </Text>
    </Pressable>
  );
}
