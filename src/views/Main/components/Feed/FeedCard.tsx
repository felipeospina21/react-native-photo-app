import type { Photos } from '@api';
import { ImageBackground, Text, View } from 'react-native';
import { UserAvatar } from './UserAvatar';

interface FeedCardProps {
  data: Photos;
}

export function FeedCard({ data }: FeedCardProps) {
  const { user, description, alt_description, created_at, urls } = data;
  const imgDescription = description ?? alt_description
  return (
    <View className="bg-white py-2">
      <UserAvatar
        img={user.profile_image.small}
        name={user.name}
        createdAt={created_at}
        userLocation = {user.location}
      />
      {imgDescription && <Text className="text-text-main text-lg mx-4 my-1">{imgDescription}</Text>}
      <View className="w-full h-60">
        <ImageBackground
          source={{
            uri: urls.regular,
          }}
          accessibilityIgnoresInvertColors
          className="h-full"
          resizeMode="cover"
        />
      </View>
    </View>
  );
}
