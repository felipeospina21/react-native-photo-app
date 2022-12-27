import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Home, MainView, LocationView, ProfileView, CameraView } from '@views';
import { registerRootComponent } from 'expo';
import { QueryClient, QueryClientProvider } from 'react-query';

export type RootStackParamList = {
  Home: undefined;
  Main: undefined;
  Location: undefined;
  Profile: undefined;
  Camera: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type Props = NativeStackScreenProps<RootStackParamList>;
export type ProfileScreenNavigationProp = Props['navigation'];

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Main" component={MainView} />
          <Stack.Screen name="Location" component={LocationView} />
          <Stack.Screen name="Profile" component={ProfileView} />
          <Stack.Screen name="Camera" component={CameraView} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

registerRootComponent(App);
