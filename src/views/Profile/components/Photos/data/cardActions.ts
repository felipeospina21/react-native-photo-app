import deleteIcon from '@assets/icons/delete.png';
import editIcon from '@assets/icons/editing.png';
import shareIcon from '@assets/icons/share.png';
import type { ImageSourcePropType } from 'react-native'

type Action = 'SHARE' | 'EDIT' | 'DELETE';
interface Actions {
  icon: ImageSourcePropType;
  label: string;
  hint: string;
  text: string;
  action: Action;
}

export const actions: Actions[] = [
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
];