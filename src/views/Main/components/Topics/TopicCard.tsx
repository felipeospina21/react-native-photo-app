import { ImageBackground, Text, View } from 'react-native';

interface TopicCardProps {
  name: string;
  image: string;
}
export function TopicCard({ name, image }: TopicCardProps) {
  return (
    <View className='flex h-full mx-2 mt-2 items-center'>
      <View className='h-[70%] rounded-3xl overflow-hidden mb-1'>
        <ImageBackground
          source={{ uri: image }}
          className="h-full aspect-square"
          resizeMode='cover'
        />
      </View>
      <Text className='text-sm font-secondary text-text-main m-0'>{name}</Text>
    </View>
  );
}
