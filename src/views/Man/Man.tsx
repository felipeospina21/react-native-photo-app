import manBody from '@assets/man/man-body.png';
import maleHair from '@assets/man/thumb-hair.png';
import malePants from '@assets/man/thumb-pants.png';
import maleShirt from '@assets/man/thumb-shirt.png';
import maleShoes from '@assets/man/thumb-shoes.png';
import type { AssetTypeData } from '@layouts';
import { CharacterLayout } from '@layouts';

export function Man() {
  const assets: AssetTypeData[] = [
    {
      type: 'hair',
      image: maleHair,
    },
    {
      type: 'shirts',
      image: maleShirt,
    },
    {
      type: 'pants',
      image: malePants,
    },
    {
      type: 'shoes',
      image: maleShoes,
    },
  ];
  return <CharacterLayout assetTypes={assets} character={manBody} />;
}
