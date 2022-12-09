import type { ProfileScreenNavigationProp } from '@App';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '@shared';
import { View } from 'react-native';

export function GenderButtons() {
  const { navigate } = useNavigation<ProfileScreenNavigationProp>();

  return (
    <View className="flex-row w-full justify-evenly">
      <PrimaryButton
        text="WOMAN"
        onPress={() => navigate('Woman')}
        a11y={{
          accessibilityLabel: 'iniciar',
          accessibilityHint: 'ir a pantalla de intro',
        }}
      />
      <PrimaryButton
        text="MAN"
        onPress={() => navigate('Man')}
        a11y={{
          accessibilityLabel: 'iniciar',
          accessibilityHint: 'ir a pantalla de intro',
        }}
      />
    </View>
  );
}
