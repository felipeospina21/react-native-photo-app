import womanHair from '@assets/woman/thumb-hair.png';
import womanPants from '@assets/woman/thumb-pants.png';
import womanShirt from '@assets/woman/thumb-shirt.png';
import womanShoes from '@assets/woman/thumb-shoes.png';
import womanBody from '@assets/woman/woman-body1.png';
import type { AssetTypeData } from '@layouts';
import { CharacterLayout } from '@layouts';

export function Woman() {
  const assets: AssetTypeData[] = [
    {
      type: 'hair',
      image: womanHair,
    },
    {
      type: 'shirts',
      image: womanShirt,
    },
    {
      type: 'pants',
      image: womanPants,
    },
    {
      type: 'shoes',
      image: womanShoes,
    },
  ];
  return <CharacterLayout assetTypes={assets} character={womanBody} />;
}
