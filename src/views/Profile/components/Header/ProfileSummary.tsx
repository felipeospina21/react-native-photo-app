import cameraIcon from '@assets/icons/camera_dark.png';
import followersIcon from '@assets/icons/followers.png';
import likeIcon from '@assets/icons/like.png';
import type { PhotoMock } from '@mocks';
import { Image, Text, View } from 'react-native';

interface ProfileSummaryProps {
  photos: PhotoMock[];
  followers: string[];
  score: number;
}

export function ProfileSummary({ photos, followers, score }: ProfileSummaryProps) {
  const NUMBER_OF_PHOTOS = photos.length;
  const NUMBER_OF_FOLLOWERS = followers.length;
  const data = [
    {
      title: 'Photos',
      icon: cameraIcon,
      value: NUMBER_OF_PHOTOS,
    },
    {
      title: 'Score',
      icon: likeIcon,
      value: score,
    },
    {
      title: 'Followers',
      icon: followersIcon,
      value: NUMBER_OF_FOLLOWERS,
    },
  ];

  return (
    <View className="flex-row justify-between w-full">
      {data.map(({ title, icon, value }, idx) => (
        <View key={idx} className="w-1/5">
          <Text className="font-secondary text-[11px]">{title}</Text>
          <View className="flex-row justify-between flex-nowrap">
            <Image
              source={icon}
              accessibilityLabel="camera icon"
              accessibilityHint="camera icon"
              accessibilityIgnoresInvertColors
              className="w-6 aspect-square"
              resizeMode="cover"
            />
            <Text className="font-secondary text-lg">{value}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
