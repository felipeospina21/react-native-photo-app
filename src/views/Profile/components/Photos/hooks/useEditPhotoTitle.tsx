import { PhotoMock } from '@mocks';
import {useState, useEffect} from 'react'

type HookReturn = [string, React.Dispatch<React.SetStateAction<string>>]
export function useEditPhotoTitle(photo: PhotoMock|null, isShown: boolean):HookReturn{
  const INIT_TITLE = photo ? photo.title : '';
  const [title, setTitle] = useState(INIT_TITLE);

  useEffect(() => {
    setTitle(INIT_TITLE);
  }, [isShown]);

  return [title, setTitle]
}