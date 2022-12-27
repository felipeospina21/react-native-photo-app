import { useStore } from '@zustandStore';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { CollectionsPhoto } from './components';
import { EditModal } from './components/EditModal';

export function PhotosCollection() {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [photoIdToEdit, setPhotoIdToEdit] = useState('');
  const [photos, deletePhoto] = useStore((state) => [state.photos, state.deletePhoto]);

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

  function validateModalVisibility(isShown: boolean, photoId: string) {
    return isShown && photoId === photoIdToEdit ? true : false;
  }

  return (
    <View className="bg-white h-4/5">
      <Text className="font-main text-center text-xl my-5">My Photos</Text>
      <FlatList
        className='mb-20 h-full'
        ListFooterComponent={<View className='h-14'/>}
        data={photos}
        keyExtractor={(item)=>item.id}
        renderItem={({ item }) => {
          const isShown = validateModalVisibility(isEditModalVisible, item.id);
          return (
            <>
              <CollectionsPhoto photo={item} handleAction={handleAction} />
              <EditModal photo={item} isShown={isShown} setVisibility={setIsEditModalVisible} />
            </>
          );
        }}
      />
    </View>
  );
}
