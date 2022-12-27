import type { PhotoMock } from '@mocks';
import { Image, Pressable, Text, View, type ImageSourcePropType } from 'react-native';
import type { HandleAction } from '../PhotosCollection';
import { PhotoActions } from './PhotoActions';

interface CollectionsPhotoProps {
  photo: PhotoMock;
  handleAction: ({ action, id, photo }: HandleAction) => void;
  showPreview: React.Dispatch<React.SetStateAction<ImageSourcePropType | null>>;
}

export function CollectionsPhoto({ photo, handleAction, showPreview }: CollectionsPhotoProps) {
  const { url, image } = photo;
  const IMAGE_SOURCE = image ? image : { uri: url };
  return (
    <View className="flex-row border-b-2 border-dotted border-text-secondary p-4 mt-1">
      <View className="w-1/4">
        <Pressable
          accessibilityLabel="photo preview"
          accessibilityHint="press for preview"
          onPress={() => showPreview(IMAGE_SOURCE)}
        >
          <Image
            source={IMAGE_SOURCE}
            className="w-20 h-20 rounded-lg"
            accessibilityIgnoresInvertColors
            resizeMode="cover"
            accessibilityLabel={photo.title}
            accessibilityHint="user collection's image"
          />
        </Pressable>
      </View>
      <View className="w-3/4 flex justify-between py-1">
        <Text className="font-secondary">{photo.title}</Text>
        <PhotoActions photo={photo} handleAction={handleAction} />
      </View>
    </View>
  );
}
