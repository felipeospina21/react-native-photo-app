import { View, Image, Text } from 'react-native'
import LogoImg from '@assets/logo.png';

export function Header() {
  return (
    <View className="h-14 flex-row justify-start items-center bg-white">
      <View className="h-10 flex-row items-center justify-around w-1/2">
        <Image
          source={LogoImg}
          accessibilityIgnoresInvertColors
          accessibilityHint="App logo"
          accessibilityLabel="logo"
        />
        <Text className="text-text-secondary font-main text-lg">PhotoSearch</Text>
      </View>
    </View>
  );
}
