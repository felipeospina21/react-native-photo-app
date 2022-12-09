import React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import type { AssetsState } from '../types';

interface CharacterBodyProps {
  imageSource: ImageSourcePropType;
  assets: AssetsState;
}
export function CharacterBody({
  imageSource,
  assets: { hair, shirts, pants, shoes },
}: CharacterBodyProps) {
  return (
    <View className="absolute bottom-1/3 left-[20%]">
      <Image
        source={hair}
        accessibilityIgnoresInvertColors
        className="absolute top-0 left-0 z-10"
      />
      <Image
        source={shirts}
        accessibilityIgnoresInvertColors
        className="absolute top-0 left-0  z-20"
      />
      <Image
        source={pants}
        accessibilityIgnoresInvertColors
        className="absolute top-0 left-0  z-10"
      />
      <Image
        source={shoes}
        accessibilityIgnoresInvertColors
        className="absolute top-0 left-0  z-10"
      />
      <Image source={imageSource} accessibilityIgnoresInvertColors className="relative mx-auto" />
    </View>
  );
}
