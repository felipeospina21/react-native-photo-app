import { PhotoMock } from '@mocks';
import { useStore } from '@zustandStore';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { CollectionsPhoto } from './components';
import { EditModal } from './components/EditModal';

export interface HandleAction {
  action: string;
  id?: string;
  photo?: PhotoMock;
}
export function PhotosCollection() {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [photoToEdit, setPhotoToEdit] = useState<PhotoMock | null>(null);
  const [photos, deletePhoto] = useStore((state) => [state.photos, state.deletePhoto]);

  function handleAction({ action, id, photo }: HandleAction) {
    switch (action) {
      case 'SHARE':
        sharePhoto();
        break;

      case 'EDIT':
        editPhoto(photo as PhotoMock);
        break;

      case 'DELETE':
        deletePhoto(id as string);
        break;
      default:
        break;
    }
  }

  function sharePhoto() {
    console.log('shared');
  }

  function editPhoto(photo: PhotoMock) {
    setPhotoToEdit(photo);
    setIsEditModalVisible(true);
  }

  return (
    <View className="bg-white h-4/5">
      <Text className="font-main text-center text-xl my-5">My Photos</Text>
      <FlatList
        className="mb-20 h-full"
        ListFooterComponent={<View className="h-14" />}
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CollectionsPhoto photo={item} handleAction={handleAction} />}
      />
      <EditModal
        photo={photoToEdit}
        isShown={isEditModalVisible}
        setVisibility={setIsEditModalVisible}
      />
    </View>
  );
}
