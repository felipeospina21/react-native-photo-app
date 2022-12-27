import { CloseButton } from '@components';
import { Image, Modal, View, type ImageSourcePropType } from 'react-native';

interface PhotoPreviewProps {
  image: ImageSourcePropType | null;
  showPreview: boolean;
  handleClose: ()=>void;
}

export function PhotoPreview({ image, showPreview, handleClose }: PhotoPreviewProps) {
  return (
    <Modal animationType="slide" visible={showPreview} onRequestClose={handleClose} transparent>
      <View className="flex justify-center items-center h-full w-full bg-bg-dark_glass">
        <CloseButton handleClose={handleClose} color="white" />
        <View className="w-11/12 h-1/2 bg-white rounded-lg overflow-hidden">
          {image && (
            <Image
              source={image}
              accessibilityIgnoresInvertColors
              resizeMode="cover"
              className="w-full h-full"
            />
          )}
        </View>
      </View>
    </Modal>
  );
}
