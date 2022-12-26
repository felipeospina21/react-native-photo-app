import { SecondaryButton } from '@components';
import { useState } from 'react';
import { Modal, Pressable, Text, TextInput, View } from 'react-native';

interface EditModalProps {
  isShown: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

export function EditModal({ title, isShown, setVisibility }: EditModalProps) {
  const [titleValue, setTitleValue] = useState(title);

  function handleTextChange(text: string) {
    setTitleValue(text);
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
        <Pressable
          className='absolute top-10 right-10'
          onPress={() => setVisibility(false)}
          accessibilityLabel="close modal"
          accessibilityHint="click to close modal"
        >
          <Text className='text-xl font-secondary_bold'>X</Text>
        </Pressable>
        <View className="flex items-center justify-evenly h-1/3 w-full ">
          <Text className='text-2xl font-main'>Edit title</Text>
          <TextInput
            className="border border-black w-4/5 rounded-lg p-2 font-secondary"
            value={titleValue}
            onChangeText={handleTextChange}
            multiline
            numberOfLines={5}
            accessibilityLabel="edit description"
            accessibilityHint="edit photo description"
          />
          <SecondaryButton
            text="save"
            onPress={() => {
              return;
            }}
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
