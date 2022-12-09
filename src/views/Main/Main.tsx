import { PrimaryLayout } from '@layouts'
import { View, Text } from 'react-native'

export function MainView(){
  return (
    <PrimaryLayout>
      <View className='bg-bg-brown_light'>
        <Text>collections</Text>
      </View>
    </PrimaryLayout>
  )
}