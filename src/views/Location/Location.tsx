import { PrimaryLayout } from '@layouts';
import { Map } from './components/map';

export function LocationView() {
  return (
    <PrimaryLayout>
      <Map />
    </PrimaryLayout>
  );
}