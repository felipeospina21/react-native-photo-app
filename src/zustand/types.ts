import type { AssetType, Currency } from '@layouts';

export interface AssetsOwned {
  man: Record<AssetType, number[]>;
  woman: Record<AssetType, number[]>;
}

export type State = {
  balance: {
    coins: number;
    gems: number;
  };
  assetsOwned: AssetsOwned;
};

export type CharacterGender = 'man' | 'woman';
interface BuyAsset {
  gender: CharacterGender;
  type: AssetType;
  id: number;
}
export type Action = {
  useBalance: (type: Currency, cost: number) => void;
  buyAsset: ({ gender, type, id }: BuyAsset) => void;
};
