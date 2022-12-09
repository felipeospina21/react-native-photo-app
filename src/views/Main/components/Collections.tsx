import { View, Text, FlatList } from 'react-native'
import { getCollections } from '../../../api/collection/collectionQueries'
import { Card } from './Card'

export function Collections(){
  // const { data } = getCollections()
  return(
    <View className= 'h-1/3 px-4 pt-4 pb-0'>
      {/* <Text className='font-secondary text-lg'>My Collections</Text>
      <FlatList
        data={data?.data}
        renderItem={({item})=><Card name={item.title} image={item.cover_photo.urls.small}/>}
        keyExtractor={(item)=>`${item.id}`}
        horizontal
      /> */}
    </View>
  )
}