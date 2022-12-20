import {  View, ActivityIndicator } from 'react-native';

export function Spinner() {
  return (
    <View className="flex justify-center items-center h-1/2">
      <ActivityIndicator size='large'/>
    </View>
  );
}
