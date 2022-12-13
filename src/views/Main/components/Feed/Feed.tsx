import { getPhotos } from '@api';
import { FlatList, Text, View } from 'react-native';
import { FeedCard } from './FeedCard';

export function Feed() {
  const { data } = getPhotos();
  return (
    <View>
      <Text className="font-secondary_bold text-lg ml-6 mt-2">Activity Feed</Text>
      <FlatList
        className="mb-14"
        data={data?.data}
        renderItem={({ item }) => <FeedCard data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
