import { photographers } from '@mocks';
import { CustomMarker } from './CustomMarker';
import { Marker } from 'react-native-maps';

export function MapMarkers() {
  return (
    <>
      {photographers.map(({ img, isPro, location, title, email }, idx) => (
        <Marker key={idx} coordinate={location} title={title} description={email}>
          <CustomMarker image={img} isPro={isPro} />
        </Marker>
      ))}
    </>
  );
}
