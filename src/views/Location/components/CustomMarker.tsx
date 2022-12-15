import { View, ImageBackground, Image, Text } from 'react-native'
import mapMark from '@assets/map-mark.png';

interface CustomMarkerProps {
  image: string;
  isPro: boolean;
}
export function CustomMarker({image, isPro}: CustomMarkerProps) {
  return (
    <View className="h-[70px] w-28 flex-row justify-start">
      <ImageBackground source={mapMark} className="h-[70px] w-14 flex justify-start items-center" >
        <View className='w-11 mt-1 aspect-square rounded-full overflow-hidden'>
          <Image 
          className='w-full aspect-square'
          resizeMode='cover'
          accessibilityIgnoresInvertColors 
          source={{uri: image}}/>
        </View>
      </ImageBackground>
      {isPro && <View className='px-1 h-1/3 bg-bg-brown_dark rounded-sm'><Text className='text-white font-bold'>PRO</Text></View>}
    </View>
  );
}