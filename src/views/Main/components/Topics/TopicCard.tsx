import { useStore } from '@zustandStore';
import { ImageBackground, Pressable, Text, View } from 'react-native';

interface TopicCardProps {
  name: string;
  image: string;
}
export function TopicCard({ name, image }: TopicCardProps) {
  const [setSelectedTopic] = useStore((state) => [state.setSelectedTopic]);

  function handlePress() {
    setSelectedTopic(name.toLowerCase());
  }

  return (
    <Pressable
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityLabel="topic"
      accessibilityHint="press topic image to filter activity feed"
    >
      <View className="flex h-full mx-2 mt-2 items-center">
        <View className="h-[70%] rounded-3xl overflow-hidden mb-1">
          <ImageBackground
            source={{ uri: image }}
            className="h-full aspect-square"
            resizeMode="cover"
          />
        </View>
        <Text className="text-sm font-secondary text-text-main m-0">{name}</Text>
      </View>
    </Pressable>
  );
}
