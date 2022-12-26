import type { PhotoMock, UserMock } from '@mocks';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { CollectionsPhoto } from './components';
import { EditModal } from './components/EditModal';

interface PhotosCollectionProps {
  user: UserMock;
}

export function PhotosCollection({ user }: PhotosCollectionProps) {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [photoIdToEdit, setPhotoIdToEdit] = useState('');
  const [photos, setPhotos] = useState<PhotoMock[]>([]);
  useEffect(() => {
    setPhotos(user.photos);
  }, []);

  function handleAction(action: string, id?: string) {
    switch (action) {
      case 'SHARE':
        sharePhoto();
        break;

      case 'EDIT':
        editPhoto(id as string);
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

  function editPhoto(photoId: string) {
    setPhotoIdToEdit(photoId);
    setIsEditModalVisible(true);
  }

  function deletePhoto(photoId: string) {
    const newPhotos = photos.filter((photo) => photo.id !== photoId);
    setPhotos(newPhotos);
  }

  function validateModalVisibility(isShown: boolean, photoId: string) {
    return isShown && photoId === photoIdToEdit ? true : false;
  }

  return (
    <View className="bg-white h-4/5">
      <Text className="font-main text-center text-xl my-5">My Photos</Text>
      {photos.map((photo) => {
        const isShown = validateModalVisibility(isEditModalVisible, photo.id);
        return (
          <React.Fragment key={photo.id}>
            <CollectionsPhoto photo={photo} handleAction={handleAction} />
            <EditModal title={photo.title} isShown={isShown} setVisibility={setIsEditModalVisible} />
          </React.Fragment>
        );
      })}
    </View>
  );
}
