import { View } from 'react-native';
import { Header, NavBar } from './components'

interface PrimaryLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export function PrimaryLayout({ children }: PrimaryLayoutProps) {
  return (
    <View className="h-full bg-bg-brown_light">
      <Header />
      {children}
      <NavBar/>
    </View>
  );
}
