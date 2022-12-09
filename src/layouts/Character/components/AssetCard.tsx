import checkIcon from '@assets/check.png';
import { CharacterGender, useStore } from '@zustandStore';
import { Alert, Image, ImageSourcePropType, Pressable, View } from 'react-native';
import type { AssetData, AssetsState, AssetType } from '../types';
import CostTag from './CostTag';

interface AssetCardProps {
  setAsset: React.Dispatch<React.SetStateAction<AssetsState>>;
  assetData: AssetData;
  assetType: AssetType;
  characterGender: CharacterGender;
}

export default function AssetCard({
  assetData: { thumb, image, price, id },
  setAsset,
  assetType,
  characterGender,
}: AssetCardProps) {
  const [useBalance, buyAsset, assetsOwned, balance] = useStore((state) => [
    state.useBalance,
    state.buyAsset,
    state.assetsOwned,
    state.balance,
  ]);

  const assetCost = price.value;

  const IS_ASSET_OWNED = assetsOwned[characterGender][assetType].includes(id);
  const IS_BALANCE_ENOUGH = assetCost <= balance[price.currency];
  const UNAVAILABLE = IS_BALANCE_ENOUGH || IS_ASSET_OWNED ? { opacity: 1 } : { opacity: 0.5 };

  function checkFundsAndAssets() {
    if (!IS_ASSET_OWNED && IS_BALANCE_ENOUGH) {
      useBalance(price.currency, price.value);
      buyAsset({ type: assetType, gender: characterGender, id });
      setAsset((prev) => ({ ...prev, [assetType]: image as ImageSourcePropType }));
    }

    if (IS_ASSET_OWNED) Alert.alert('Asset already bought');
    if (!IS_BALANCE_ENOUGH) Alert.alert('Not enough credit to purchase the item');
  }

  function handlePress() {
    checkFundsAndAssets();
  }

  return (
    <Pressable
      onPress={handlePress}
      accessibilityLabel="Pick Asset"
      accessibilityHint="Pick character Asset"
      className="border border-border-light bg-bg-purple w-32 rounded-2xl flex justify-around items-center mx-2"
      style={{ ...UNAVAILABLE }}
    >
      {IS_ASSET_OWNED && <CheckIcon />}
      <View className="w-full h-2/3 flex-row justify-center items-center">
        <Image
          source={thumb as ImageSourcePropType}
          accessibilityIgnoresInvertColors
          resizeMethod="resize"
          resizeMode="contain"
          style={{ height: '100%', width: undefined, aspectRatio: 1.5 }}
        />
      </View>
      <View className="h-1/3">
        <CostTag
          icon={price.icon as ImageSourcePropType}
          value={price.value}
          textStyle={{ color: 'white' }}
        />
      </View>
    </Pressable>
  );
}

function CheckIcon() {
  return (
    <View className="absolute w-1/4 h-1/4 left-1 top-1">
      <Image
        source={checkIcon}
        accessibilityIgnoresInvertColors
        className="w-full h-full"
        resizeMode="contain"
      />
    </View>
  );
}
