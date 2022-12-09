import { Text, View } from 'react-native';

export function HomeTitle() {
  return (
    <View className="flex items-center justify-center w-1/2 mt-8">
      <Text className="text-2xl text-white">Dive into</Text>
      <Text className="text-2xl text-center text-white font-porterSans">Fashion Show</Text>
    </View>
  );
}
