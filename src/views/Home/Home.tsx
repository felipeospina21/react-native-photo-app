import home from '@assets/home-bg.png';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '@shared';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { ImageBackground, StatusBar, Text, View } from 'react-native';
import type { ProfileScreenNavigationProp } from '@App'

SplashScreen.preventAutoHideAsync();

export function Home() {
  const { navigate } = useNavigation<ProfileScreenNavigationProp>()
  const [fontsLoaded] = useFonts({
    main: require('@assets/fonts/Jua-Regular.ttf'),
    secondary: require('@assets/fonts/Kalam-Regular.ttf'),
    secondary_bold: require('@assets/fonts/Kalam-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground source={home} onLayout={onLayoutRootView} className="h-full flex justify-end">
      <StatusBar />
      <View className="flex items-center justify-center h-1/3 rounded-t-[30px] bg-bg-dark_glass">
        <Text className="font-main text-white text-4xl">Photo Search</Text>
        <Text className="font-secondary text-white text-lg mb-6">
          find your best photograph in the city
        </Text>
        <PrimaryButton
          text="Search"
          onPress={()=>navigate('Main')}
          a11y={{ accessibilityHint: 'click to search photos', accessibilityLabel: 'search' }}
        />
      </View>
    </ImageBackground>
  );
}
