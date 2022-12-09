import { View } from 'react-native';
import { Header, NavBar } from './components'

interface PrimaryLayoutProps {
  children: JSX.Element;
}

export function PrimaryLayout({ children }: PrimaryLayoutProps) {
  return (
    <View className="h-full">
      <Header />
      {children}
      <NavBar/>
    </View>
  );
}
