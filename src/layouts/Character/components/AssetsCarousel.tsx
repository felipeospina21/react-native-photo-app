import { data } from '@mocks';
import { useRoute } from '@react-navigation/native';
import { CharacterGender } from '@zustandStore';
import { FlatList, Text, View } from 'react-native';
import type { AssetsState, AssetType } from '../types';
import AssetCard from './AssetCard';

interface AssetsCarouselProps {
  title: AssetType;
  setAsset: React.Dispatch<React.SetStateAction<AssetsState>>;
}

export function AssetsCarousel({ title, setAsset }: AssetsCarouselProps) {
  const route = useRoute();
  const routeName = route.name.toLowerCase() as CharacterGender;
  const assetType = title.toLowerCase() as AssetType;
  return (
    <View className="border-2 border-border-light h-[30%] w-full bg-bg-purple rounded-t-3xl absolute bottom-0 left-0 flex justify-evenly items-center">
      <Text className="text-white text-xl capitalize">{title}</Text>
      <View className="w-full h-1/2">
        <FlatList
          horizontal
          data={data[routeName][assetType]}
          renderItem={({ item }) => (
            <AssetCard
              assetData={item}
              assetType={assetType as AssetType}
              setAsset={setAsset}
              characterGender={routeName as CharacterGender}
            />
          )}
        />
      </View>
    </View>
  );
}
