import { CloseButton, SecondaryButton } from '@components';
import { PhotoMock } from '@mocks';
import { useStore } from '@zustandStore';
import { Modal, Text, TextInput, View } from 'react-native';
import { useEditPhotoTitle } from '../hooks';

interface EditModalProps {
  isShown: boolean;
  photo: PhotoMock | null;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export function EditModal({ photo, isShown, setVisibility }: EditModalProps) {
  const [title, updateTitle] = useEditPhotoTitle(photo, isShown);
  const [editPhoto] = useStore((state) => [state.editPhoto]);

  function handleTextChange(text: string) {
    updateTitle(text);
  }

  function handleSave() {
    if (photo) {
      editPhoto(photo.id, title);
      setVisibility(false);
    }
  }

  return (
    <Modal
      animationType="slide"
      visible={isShown}
      onRequestClose={() => {
        setVisibility(false);
      }}
    >
      <View className="flex items-center justify-center h-full w-full">
        <CloseButton handleClose={() => setVisibility(false)} />
        <View className="flex items-center justify-evenly h-1/3 w-full ">
          <Text className="text-2xl font-main">Edit title</Text>
          <TextInput
            className="border border-black w-4/5 rounded-lg p-2 font-secondary"
            value={title}
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
