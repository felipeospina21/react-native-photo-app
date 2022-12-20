import { getPhotos } from '@api';
import { Spinner } from '@components';
import { useStore } from '@zustandStore';
import { FlatList, Text, View } from 'react-native';
import { FeedCard } from './FeedCard';

export function Feed() {
  const [topic] = useStore(state => state.topic)
  const { data, isLoading } = getPhotos(topic);

  if(isLoading) return <Spinner />
  return (
    <View>
      <Text className="font-secondary_bold text-lg ml-6 mt-2">Activity Feed</Text>
      <FlatList
        className="mb-14"
        data={data?.data.results}
        renderItem={({ item }) => <FeedCard data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
