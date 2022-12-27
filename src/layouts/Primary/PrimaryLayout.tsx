import { View, StatusBar } from 'react-native';
import { Header, NavBar } from './components'

interface PrimaryLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export function PrimaryLayout({ children }: PrimaryLayoutProps) {
  return (
    <View className="h-full bg-bg-brown_light">
      <StatusBar />
      <Header />
      {children}
      <NavBar/>
    </View>
  );
}
