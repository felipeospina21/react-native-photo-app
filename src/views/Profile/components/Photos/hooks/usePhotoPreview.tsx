import { useEffect, useRef, useState } from 'react';
import type { ImageSourcePropType } from 'react-native';

interface UsePhotoPreview {
  photoPreview: ImageSourcePropType | null;
  setPhotoPreview: React.Dispatch<React.SetStateAction<ImageSourcePropType | null>>;
  isPreviewShown: boolean;
}
export function usePhotoPreview(): UsePhotoPreview {
  const isMounted = useRef(false);
  const [photoPreview, setPhotoPreview] = useState<ImageSourcePropType | null>(null);
  const [showPhotoPreview, setShowPhotoPreview] = useState(false);

  useEffect(() => {
    if (isMounted.current) setShowPhotoPreview((prev) => !prev);
    else isMounted.current = true;
  }, [photoPreview]);

  return { photoPreview, setPhotoPreview, isPreviewShown: showPhotoPreview };
}
