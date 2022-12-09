import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Home, Man, Woman } from '@views';
import { registerRootComponent } from 'expo';

export type RootStackParamList = {
  Home: undefined;
  Woman: undefined;
  Man: undefined;
  Other: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type Props = NativeStackScreenProps<RootStackParamList>;
export type ProfileScreenNavigationProp = Props['navigation'];

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Woman" component={Woman} />
        <Stack.Screen name="Man" component={Man} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
