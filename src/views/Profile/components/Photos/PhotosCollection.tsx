import { PhotoMock } from '@mocks';
import { useStore } from '@zustandStore';
import React, { useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { CollectionsPhoto, EditModal, PhotoPreview } from './components';
import { usePhotoPreview } from './hooks';

export interface HandleAction {
  action: string;
  id?: string;
  photo?: PhotoMock;
}
export function PhotosCollection() {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [photoToEdit, setPhotoToEdit] = useState<PhotoMock | null>(null);
  const {photoPreview, setPhotoPreview, isPreviewShown} = usePhotoPreview();
  const [photos, deletePhoto] = useStore((state) => [state.photos, state.deletePhoto]);

  function handleAction({ action, id, photo }: HandleAction) {
    switch (action) {
      case 'SHARE':
        sharePhoto();
        break;

      case 'EDIT':
        onEditPress(photo as PhotoMock);
        break;

      case 'DELETE':
        onDeletePress(id as string);
        break;
      default:
        break;
    }
  }

  function sharePhoto() {
    console.log('shared');
  }

  function onDeletePress(photoId: string) {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this photo?',
      [
        { text: 'yes', style: 'default', onPress: () => deletePhoto(photoId) },
        { text: 'no', style: 'cancel' },
      ],
      { cancelable: true }
    );
  }

  function onEditPress(photo: PhotoMock) {
    setPhotoToEdit(photo);
    setIsEditModalVisible(true);
  }

  function handlePreviewClose() {
    setPhotoPreview(null);
  }

  return (
    <View className="bg-white h-4/5">
      <Text className="font-main text-center text-xl my-5">My Photos</Text>
      <FlatList
        className="mb-20 h-full"
        ListFooterComponent={<View className="h-14" />}
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CollectionsPhoto
            photo={item}
            handleAction={handleAction}
            showPreview={setPhotoPreview}
          />
        )}
      />
      <EditModal
        photo={photoToEdit}
        isShown={isEditModalVisible}
        setVisibility={setIsEditModalVisible}
      />
      <PhotoPreview
        image={photoPreview}
        showPreview={isPreviewShown}
        handleClose={handlePreviewClose}
      />
    </View>
  );
}
