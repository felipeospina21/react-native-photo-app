import bell from '@assets/icons/bell.png';
import chat from '@assets/icons/chat.png';
import home from '@assets/icons/home.png';
import location from '@assets/icons/location.png';
import user from '@assets/icons/user.png';
import { Image, View } from 'react-native';

export function NavBar() {
    return (
    <View className="h-14 w-full bg-bg-brown_light flex-row justify-evenly items-center absolute bottom-0">
      <Image source={home} accessibilityIgnoresInvertColors />
      <Image source={location} accessibilityIgnoresInvertColors />
      <Image source={chat} accessibilityIgnoresInvertColors />
      <Image source={bell} accessibilityIgnoresInvertColors />
      <Image source={user} accessibilityIgnoresInvertColors />
    </View>
  );
}
