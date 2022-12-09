import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { AssetType, AssetTypeData } from '../types';

interface AssetTypeSelectorProps {
  assetTypes: AssetTypeData[];
  onPress: React.Dispatch<React.SetStateAction<AssetType>>;
}

export function AssetTypeSelector({ assetTypes, onPress }: AssetTypeSelectorProps) {
  function handlePress(assetType: AssetType) {
    onPress(assetType);
  }

  return (
    <View className="w-12 h-1/3 bg-bg-gray border border-border-gray rounded-full absolute right-5 top-1/4 -translate-y-1/2 flex items-center justify-evenly">
      {assetTypes.map((asset, index) => (
        <Pressable
          key={index}
          onPress={() => handlePress(asset.type)}
          accessibilityLabel="Select Asset Type"
          accessibilityHint="Select the type of asset you want to apply to the character"
        >
          <Image source={asset.image} accessibilityIgnoresInvertColors />
        </Pressable>
      ))}
    </View>
  );
}
