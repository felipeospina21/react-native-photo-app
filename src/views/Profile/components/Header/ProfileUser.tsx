import { Text, View } from 'react-native';

interface ProfileUserProps {
  name: string;
  lastname: string;
  username: string
}
export function ProfileUser({ name, lastname, username }: ProfileUserProps) {
  return (
    <View>
      <Text className="font-secondary_bold">{`${name} ${lastname}`}</Text>
      <Text className="font-secondary">{username}</Text>
    </View>
  );
}
