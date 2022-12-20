import type { Photographer } from '@mocks';
import { Marker } from 'react-native-maps';
import { CustomMarker } from './CustomMarker';

interface MapMarkersProps {
  data: Photographer[];
}

export function MapMarkers({ data }: MapMarkersProps) {
  return (
    <>
      {data.map(({ img, isPro, location, title, email }, idx) => (
        <Marker key={idx} coordinate={location} title={title} description={email}>
          <CustomMarker image={img} isPro={isPro} />
        </Marker>
      ))}
    </>
  );
}
