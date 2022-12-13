import { View, Text, FlatList } from 'react-native'
import { getTopics } from '@api'
import { TopicCard } from './TopicCard'

export function Topics(){
  const { data } = getTopics()
  return(
    <View className= 'h-1/4 px-5 pt-4 pb-0'>
      <Text className='font-secondary_bold text-lg ml-2'>My Collections</Text>
      <FlatList
        data={data?.data}
        renderItem={({item})=><TopicCard name={item.title} image={item.cover_photo.urls.small}/>}
        keyExtractor={(item)=>`${item.id}`}
        horizontal
      />
    </View>
  )
}