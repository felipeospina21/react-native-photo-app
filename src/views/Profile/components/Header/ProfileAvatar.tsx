import { View, Image } from 'react-native' 

interface ProfileAvatarProps{
  imageUri: string;
}
export function ProfileAvatar({imageUri}: ProfileAvatarProps) {
  return (
    <View className="w-1/4">
      <Image
        className="w-full aspect-square rounded-full"
        source={{
          uri: imageUri,
        }}
        resizeMode="cover"
        accessibilityLabel="profile picture"
        accessibilityHint="user profile picture"
        accessibilityIgnoresInvertColors
      />
    </View>
  );
}