import deleteIcon from '@assets/icons/delete.png';
import editIcon from '@assets/icons/editing.png';
import shareIcon from '@assets/icons/share.png';
import { useState } from 'react';
import { Image, Pressable, Text, View, type ImageSourcePropType } from 'react-native';

interface PhotoActionsProps {
  photoId: string;
  handleAction: (action:string, id?:string)=>void
}
type Action = 'SHARE' | 'EDIT' | 'DELETE';
interface Actions {
  icon: ImageSourcePropType;
  label: string;
  hint: string;
  text: string;
  action: Action;
}

export function PhotoActions({ photoId, handleAction }: PhotoActionsProps) {
  const [actions] = useState<Actions[]>([
    {
      icon: shareIcon,
      label: 'share image',
      hint: 'click to share image',
      text: 'share',
      action: 'SHARE',
    },
    {
      icon: editIcon,
      label: 'edit image',
      hint: 'click to edit image',
      text: 'edit',
      action: 'EDIT',
    },
    {
      icon: deleteIcon,
      label: 'delet image',
      hint: 'click to delete image',
      text: 'delete',
      action: 'DELETE',
    },
  ]);


  return (
    <View className="flex-row justify-between w-4/5">
      {actions.map(({ icon, label, hint, text, action }, idx) => (
        <Pressable
          key={idx}
          accessibilityLabel={label}
          accessibilityHint={hint}
          onPress={() => handleAction(action, photoId)}
          className="w-1/4 h-8"
        >
          <View className="flex-row justify-between items-center">
            <Image
              source={icon}
              className="w-5 aspect-square"
              accessibilityIgnoresInvertColors
              resizeMode="contain"
            />
            <Text className="font-secondary capitalize text-[11px]">{text}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}
