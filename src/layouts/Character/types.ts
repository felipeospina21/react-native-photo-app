import type { ImageSourcePropType } from 'react-native';

export type AssetType = 'hair' | 'shirts' | 'pants' | 'shoes';
export type Currency = 'coins' | 'gems';

export interface AssetTypeData {
  type: AssetType;
  image: ImageSourcePropType;
}

export interface AssetData {
  id: number;
  thumb: string;
  image: string;
  price: {
    icon: string;
    currency: Currency;
    value: number;
  };
}

export interface AssetsState {
  hair?: AssetImage;
  shirts?: AssetImage;
  pants?: AssetImage;
  shoes?: AssetImage;
}
export type AssetImage = ImageSourcePropType | undefined;
