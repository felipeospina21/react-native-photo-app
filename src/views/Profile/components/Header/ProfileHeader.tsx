import type { UserMock } from '@mocks';
import { SecondaryButton } from '@components';
import { View } from 'react-native';
import { ProfileAvatar } from './ProfileAvatar'
import { ProfileUser } from './ProfileUser'
import { ProfileSummary } from './ProfileSummary'

interface ProfileHeaderProps {
  user: UserMock;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  const { image, name, lastname, username, photos, followers, score } = user;
  return (
    <View className="flex-row my-5 mx-4 h-1/6">
      <ProfileAvatar imageUri={image} />
      <View className="flex-col my-1 px-4 justify-between w-3/4">
        <ProfileUser name={name} lastname={lastname} username={username} />
        <ProfileSummary photos={photos} followers={followers} score={score} />
        <SecondaryButton
          text="Edit Profile"
          onPress={() => {
            return;
          }}
          a11y={{
            accessibilityHint: 'click to edit profile',
            accessibilityLabel: 'edit profile',
          }}
        />
      </View>
    </View>
  );
}
