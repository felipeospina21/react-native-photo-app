import coinIcon from '@assets/coin.png';
import gemIcon from '@assets/gem.png';
import { useStore } from '@zustandStore';
import { View } from 'react-native';
import CostTag from './CostTag';

export function UserBalance() {
  const [balance] = useStore((state) => [state.balance]);
  return (
    <View className="w-2/5 h-8 border border-border-gray rounded-full absolute top-10 left-10 bg-bg-gray flex-row">
      <CostTag icon={gemIcon} value={balance.gems} />
      <CostTag icon={coinIcon} value={balance.coins} />
    </View>
  );
}
