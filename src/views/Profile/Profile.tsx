import { PrimaryLayout } from '@layouts';
import { userMock as user } from '@mocks';
import { PhotosCollection, ProfileHeader } from './components';

export function ProfileView() {
  return (
    <PrimaryLayout>
      <ProfileHeader user={user} />
      <PhotosCollection />
    </PrimaryLayout>
  );
}
