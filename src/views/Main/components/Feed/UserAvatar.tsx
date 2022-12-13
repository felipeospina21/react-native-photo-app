import { ImageBackground, Text, View } from 'react-native';

interface UserAvatarProps {
  img: string;
  name: string;
  createdAt: string;
  userLocation: string;
}

export function UserAvatar({ img, name, createdAt, userLocation }: UserAvatarProps) {
  function calcPublishingTimeInHours() {
    const now = new Date();
    const creationDate = new Date(createdAt);
    const hoursAgo = (now.getTime() - creationDate.getTime()) / (1000 * 60 * 60);
    return Math.floor(hoursAgo);
  }

  function formatPublishingTime(hours: number) {
    if (hours > 24) return `${Math.floor(hours / 24)} days`;
    return `${hours} hours`;
  }

  function formatUserLocation(location: string | null) {
    return location ? `at ${userLocation}` : '';
  }

  const published = calcPublishingTimeInHours();
  const formatedPublishingTime = formatPublishingTime(published);
  const formatedLocation = formatUserLocation(userLocation);
  const publishedAt = `${formatedPublishingTime} ago ${formatedLocation}`;

  return (
    <View className="flex-row justify-start items-center m-4">
      <View className="w-12 h-12 rounded-full overflow-hidden">
        <ImageBackground
          source={{
            uri: img,
          }}
          accessibilityIgnoresInvertColors
          className="h-full aspect-square"
          resizeMode="cover"
        />
      </View>
      <View className="mx-2">
        <Text className="font-secondary text-sm text-text-main font-bold">{name}</Text>
        <Text className="font-secondary text-xs text-text-main">{publishedAt}</Text>
      </View>
    </View>
  );
}
