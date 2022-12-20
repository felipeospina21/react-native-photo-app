import { Text, View } from 'react-native';
import type { UserMock } from '@mocks';

interface PhotosCollectionProps {
  user: UserMock;
}

export function PhotosCollection({user}: PhotosCollectionProps) {
  return (
    <View className="bg-white h-4/5">
      <Text className="font-main text-center text-xl">My Photos</Text>
      {user.photos.map((photo) => (
        <View key={photo.id}>
          <Text className="font-secondary">{photo.title}</Text>
        </View>
      ))}
    </View>
  );
}
