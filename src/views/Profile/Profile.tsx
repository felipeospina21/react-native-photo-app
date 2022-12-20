import { PrimaryLayout } from '@layouts';
import { userMock as user } from '@mocks';
import { ProfileHeader, PhotosCollection } from './components'

export function ProfileView() {
  return (
    <PrimaryLayout>
      <ProfileHeader user={user} />
      <PhotosCollection user={user} />
    </PrimaryLayout>
  );
}
