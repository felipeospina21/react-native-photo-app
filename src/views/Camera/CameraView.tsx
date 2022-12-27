import circle from '@assets/icons/circle_outline.png';
import { IconButton, PrimaryButton } from '@components';
import { PrimaryLayout } from '@layouts';
import { useStore } from '@zustandStore';
import { Camera, CameraType, type CameraCapturedPicture } from 'expo-camera';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export function CameraView() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [capturedImage, setCapturedImage] = useState<CameraCapturedPicture | null>(null);
  const [addPhoto] = useStore((state) => [state.addPhoto]);
  let camera: Camera;

  async function handleTakePicture() {
    if (permission?.granted && isCameraReady && camera) {
      const photo = await camera.takePictureAsync();
      setCapturedImage(photo);
      addPhoto({
        title: 'new Photo',
        id: uuidv4(),
        url: 'https://images.unsplash.com/photo-1671415366359-393861a1f57e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
      });
    } else {
      console.log('not granted');
    }
  }

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className="flex items-center justify-center h-full w-full">
        <Text className="text-center m-8 font-main text-lg">
          We need your permission to show the camera
        </Text>
        <PrimaryButton
          onPress={requestPermission}
          text="grant permission"
          a11y={{
            accessibilityLabel: 'grant permission',
            accessibilityHint: 'press to grant camera use permission',
          }}
        />
      </View>
    );
  }
  return (
    <PrimaryLayout>
      <Camera
        type={CameraType.back}
        onCameraReady={() => setIsCameraReady(true)}
        ref={(ref) => {
          camera = ref as Camera;
        }}
        className="w-full h-full"
      >
        <IconButton
          icon={circle}
          onPress={handleTakePicture}
          a11y={{ accessibilityLabel: 'take picture', accessibilityHint: 'press to take picture' }}
        />
        {capturedImage && (
          <Image
            source={capturedImage}
            accessibilityIgnoresInvertColors
            className="w-14 h-14 absolute bottom-32 right-5"
          />
        )}
      </Camera>
    </PrimaryLayout>
  );
}
