import { View, Text, Image } from 'react-native'
import type { PhotoMock } from '@mocks';
import { PhotoActions } from './PhotoActions'

interface CollectionsPhotoProps {
  photo: PhotoMock;
  handleAction: (action:string, id?:string)=>void
}

export function CollectionsPhoto({photo, handleAction}:CollectionsPhotoProps) {
  
  return (
    <View className="flex-row border-b-2 border-dotted border-text-secondary p-4 mt-1">
      <View className="w-1/4">
        <Image
          source={{
            uri: photo.url,
          }}
          className="w-20 aspect-square rounded-lg"
          accessibilityIgnoresInvertColors
          resizeMode="cover"
          accessibilityLabel={photo.title}
          accessibilityHint="user collection's image"
        />
      </View>
      <View className="w-3/4 flex justify-between py-1">
        <Text className="font-secondary">{photo.title}</Text>
        <PhotoActions photoId={photo.id} handleAction={handleAction}/>
      </View>
    </View>
  );
}