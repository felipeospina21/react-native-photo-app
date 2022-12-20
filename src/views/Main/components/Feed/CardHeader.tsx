import { ImageBackground, Text, View } from 'react-native';
import { calcPublishingTimeInHours, formatPublishingTime, formatUserLocation } from '@utils';

interface CardHeaderProps {
  img: string;
  name: string;
  createdAt: string;
  userLocation: string;
}

export function CardHeader({ img, name, createdAt, userLocation }: CardHeaderProps) {
  const published = calcPublishingTimeInHours(createdAt);
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
