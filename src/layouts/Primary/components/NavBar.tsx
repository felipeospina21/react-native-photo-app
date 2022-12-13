import type { ProfileScreenNavigationProp, RootStackParamList } from '@App';
import chat from '@assets/icons/chat.png';
import home from '@assets/icons/home.png';
import location from '@assets/icons/location.png';
import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, View, type ImageSourcePropType } from 'react-native';

export function NavBar() {
  const { navigate } = useNavigation<ProfileScreenNavigationProp>();
  const routes = [
    { route: 'Home', icon: home, label: 'home button', hint: 'navigate to home page' },
    { route: 'Location', icon: location, label: 'map button', hint: 'navigate to map page' },
    { route: 'Main', icon: chat, label: 'feed button', hint: 'navigate to feed page' },
    { route: 'Home', icon: home, label: 'home button', hint: 'navigate to home page' },
    { route: 'Home', icon: home, label: 'home button', hint: 'navigate to home page' },
  ];
  return (
    <View className="h-14 w-full bg-bg-brown_light flex-row justify-evenly items-center absolute bottom-0">
      {routes.map(({ icon, label, hint, route }, idx) => (
        <NavButton
          key={idx}
          icon={icon}
          a11y={{ label, hint }}
          onPress={() => navigate(route as keyof RootStackParamList)}
        />
      ))}
    </View>
  );
}

interface NavButtonProps {
  icon: ImageSourcePropType;
  a11y: {
    label: string;
    hint: string;
  };
  onPress: () => void;
}
function NavButton({ onPress, icon, a11y: { label, hint } }: NavButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={hint}
      onPress={onPress}
    >
      <Image source={icon} accessibilityIgnoresInvertColors />
    </Pressable>
  );
}
