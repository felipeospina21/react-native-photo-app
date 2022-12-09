import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import { createRef } from 'react';

export function useZoom() {
  const zoomableViewRef = createRef<ReactNativeZoomableView>();
  function zoomIn() {
    zoomableViewRef.current?.zoomBy(0.1);
  }
  function zoomOut() {
    zoomableViewRef.current?.zoomBy(-0.1);
  }

  return { zoomIn, zoomOut, zoomableViewRef };
}
