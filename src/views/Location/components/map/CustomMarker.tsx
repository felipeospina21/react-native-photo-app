import { View, ImageBackground, Image, Text } from 'react-native'
import mapMark from '@assets/map-mark.png';

export function CustomMarker() {
  return (
    <View className="h-[70px] w-28 flex-row justify-start">
      <ImageBackground source={mapMark} className="h-[70px] w-14 flex justify-start items-center" >
        <View className='w-11 mt-1 aspect-square rounded-full overflow-hidden'>
          <Image 
          className='w-full aspect-square'
          resizeMode='cover'
          accessibilityIgnoresInvertColors 
          source={{uri: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"}}/>
        </View>
      </ImageBackground>
        <View className='px-1 h-1/3 bg-bg-brown_dark rounded-sm'><Text className='text-white font-bold'>PRO</Text></View>
    </View>
  );
}