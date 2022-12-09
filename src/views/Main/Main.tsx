import { PrimaryLayout } from '@layouts'
import { View, Text } from 'react-native'
import { Collections } from './components'

export function MainView(){
  return (
    <PrimaryLayout>
      <Collections />
      <View>
        <Text className='font-secondary text-lg'>Activity Feed</Text>
        <View className='bg-white'>
          <View className='flex-row justify-start items-center'>
            {/* <Image/> */}
            <View className='w-10 h-10 border border-black'/>
            <View>
              <Text className='font-secondary text-sm text-text-main font-bold'>name</Text>
              <Text className='font-secondary text-xs text-text-main'>status</Text>
            </View>
          </View>
        </View>
      </View>
    </PrimaryLayout>
  )
}