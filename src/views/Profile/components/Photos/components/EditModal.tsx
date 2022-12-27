import { SecondaryButton } from '@components';
import { PhotoMock } from '@mocks';
import { useStore } from '@zustandStore';
import { useEffect, useState } from 'react';
import { Modal, Pressable, Text, TextInput, View } from 'react-native';

interface EditModalProps {
  isShown: boolean;
  photo: PhotoMock | null;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export function EditModal({ photo, isShown, setVisibility }: EditModalProps) {
  const INIT_TITLE = photo ? photo.title : ''
  const [updatedTitle, setUpdatedTitle] = useState(INIT_TITLE);
  const [editPhoto] = useStore((state) => [state.editPhoto]);

  function handleTextChange(text: string) {
    setUpdatedTitle(text);
  }

  function handleSave() {
    if(photo){
      editPhoto(photo.id, updatedTitle);
      setVisibility(false);
    }
  }

 useEffect(() => {
  setUpdatedTitle(INIT_TITLE)
 },[isShown])

  return (
    <Modal
      animationType="slide"
      visible={isShown}
      onRequestClose={() => {
        setVisibility(false);
      }}
    >
      <View className="flex items-center justify-center h-full w-full">
        <Pressable
          className="absolute top-10 right-10"
          onPress={() => setVisibility(false)}
          accessibilityLabel="close modal"
          accessibilityHint="click to close modal"
        >
          <Text className="text-xl font-secondary_bold">X</Text>
        </Pressable>
        <View className="flex items-center justify-evenly h-1/3 w-full ">
          <Text className="text-2xl font-main">Edit title</Text>
          <TextInput
            className="border border-black w-4/5 rounded-lg p-2 font-secondary"
            value={updatedTitle}
            onChangeText={handleTextChange}
            multiline
            numberOfLines={5}
            accessibilityLabel="edit description"
            accessibilityHint="edit photo description"
          />
          <SecondaryButton
            text="save"
            onPress={handleSave}
            a11y={{
              accessibilityLabel: 'save changes',
              accessibilityHint: 'click to save changes',
            }}
          />
        </View>
      </View>
    </Modal>
  );
}
