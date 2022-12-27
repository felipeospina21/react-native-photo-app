import { PhotoMock } from '@mocks';
import { Image, Pressable, Text, View } from 'react-native';
import type { HandleAction } from '../PhotosCollection'
import { actions } from '../data'

interface PhotoActionsProps {
  photo: PhotoMock;
  handleAction: ({ action, id, photo }: HandleAction)=>void
}
export function PhotoActions({ photo, handleAction }: PhotoActionsProps) {
  return (
    <View className="flex-row justify-between w-4/5">
      {actions.map(({ icon, label, hint, text, action }, idx) => (
        <Pressable
          key={idx}
          accessibilityLabel={label}
          accessibilityHint={hint}
          onPress={() => handleAction({ action, photo, id: photo.id })}
          className="w-1/4 h-8"
        >
          <View className="flex-row justify-between items-center">
            <Image
              source={icon}
              className="w-5 aspect-square"
              accessibilityIgnoresInvertColors
              resizeMode="contain"
            />
            <Text className="font-secondary capitalize text-[11px]">{text}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}
