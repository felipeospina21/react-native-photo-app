import characterBg from '@assets/secondary-bg.png';
import { useState } from 'react';
import { ImageBackground, ImageSourcePropType, StatusBar } from 'react-native';
import { AssetsCarousel, AssetTypeSelector, CharacterBody, UserBalance } from './components';
import type { AssetsState, AssetType, AssetTypeData } from './types';

interface CharacterLayoutProps {
  assetTypes: AssetTypeData[];
  character: ImageSourcePropType;
}

export function CharacterLayout({ assetTypes, character }: CharacterLayoutProps): JSX.Element {
  const [selectedAssetType, setSelectedAssetType] = useState<AssetType>('hair');
  const [assets, setAssets] = useState<AssetsState>({
    hair: undefined,
    shirts: undefined,
    pants: undefined,
    shoes: undefined,
  });

  return (
    <ImageBackground source={characterBg} className="h-full">
      <StatusBar translucent hidden />
      <UserBalance />
      <AssetTypeSelector assetTypes={assetTypes} onPress={setSelectedAssetType} />
      <CharacterBody imageSource={character} assets={assets} />
      <AssetsCarousel title={selectedAssetType} setAsset={setAssets} />
    </ImageBackground>
  );
}
