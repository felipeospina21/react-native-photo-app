import { View, Text, Image } from 'react-native'
import type { PhotoMock } from '@mocks';
import { PhotoActions } from './PhotoActions'
import type { HandleAction } from '../PhotosCollection'

interface CollectionsPhotoProps {
  photo: PhotoMock;
  handleAction: ({ action, id, photo }: HandleAction)=>void
}

export function CollectionsPhoto({photo, handleAction}:CollectionsPhotoProps) {
  const { url, image } = photo
  const IMAGE_SOURCE = image ? image : {uri: url}
  return (
    <View className="flex-row border-b-2 border-dotted border-text-secondary p-4 mt-1">
      <View className="w-1/4">
        <Image
          source={IMAGE_SOURCE}
          className="w-20 h-20 rounded-lg"
          accessibilityIgnoresInvertColors
          resizeMode="cover"
          accessibilityLabel={photo.title}
          accessibilityHint="user collection's image"
        />
      </View>
      <View className="w-3/4 flex justify-between py-1">
        <Text className="font-secondary">{photo.title}</Text>
        <PhotoActions photo={photo} handleAction={handleAction}/>
      </View>
    </View>
  );
}