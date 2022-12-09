import { AssetData, AssetType } from '@layouts';

export interface Data {
  man: Record<AssetType, AssetData[]>;
  woman: Record<AssetType, AssetData[]>;
}

export const data: Data = {
  man: {
    hair: [
      {
        id: 1,
        thumb: require('@assets/man/hair-thumb2.png'),
        image: require('@assets/man/hair2.png'),
        price: { icon: require('@assets/gem.png'), value: 10, currency: 'gems' },
      },
      {
        id: 2,
        thumb: require('@assets/man/hair-thumb4.png'),
        image: require('@assets/man/hair4.png'),
        price: { icon: require('@assets/coin.png'), value: 300, currency: 'coins' },
      },
      {
        id: 3,
        thumb: require('@assets/man/hair-thumb6.png'),
        image: require('@assets/man/hair6.png'),
        price: { icon: require('@assets/coin.png'), value: 1000, currency: 'coins' },
      },
      {
        id: 4,
        thumb: require('@assets/man/hair-thumb8.png'),
        image: require('@assets/man/hair8.png'),
        price: { icon: require('@assets/gem.png'), value: 50, currency: 'gems' },
      },
    ],
    shirts: [
      {
        id: 1,
        thumb: require('@assets/man/shirt-thumb2.png'),
        image: require('@assets/man/shirt2.png'),
        price: { icon: require('@assets/gem.png'), value: 10, currency: 'gems' },
      },
      {
        id: 2,
        thumb: require('@assets/man/shirt-thumb4.png'),
        image: require('@assets/man/shirt4.png'),
        price: { icon: require('@assets/coin.png'), value: 300, currency: 'coins' },
      },
      {
        id: 3,
        thumb: require('@assets/man/shirt-thumb6.png'),
        image: require('@assets/man/shirt6.png'),
        price: { icon: require('@assets/coin.png'), value: 1000, currency: 'coins' },
      },
      {
        id: 4,
        thumb: require('@assets/man/shirt-thumb8.png'),
        image: require('@assets/man/shirt8.png'),
        price: { icon: require('@assets/gem.png'), value: 50, currency: 'gems' },
      },
      {
        id: 5,
        thumb: require('@assets/man/shirt-thumb10.png'),
        image: require('@assets/man/shirt10.png'),
        price: { icon: require('@assets/gem.png'), value: 50, currency: 'gems' },
      },
    ],
    pants: [
      {
        id: 1,
        thumb: require('@assets/man/pants-thumb2.png'),
        image: require('@assets/man/pants2.png'),
        price: { icon: require('@assets/gem.png'), value: 10, currency: 'gems' },
      },
      {
        id: 2,
        thumb: require('@assets/man/pants-thumb4.png'),
        image: require('@assets/man/pants4.png'),
        price: { icon: require('@assets/coin.png'), value: 300, currency: 'coins' },
      },
      {
        id: 3,
        thumb: require('@assets/man/pants-thumb5.png'),
        image: require('@assets/man/pants5.png'),
        price: { icon: require('@assets/coin.png'), value: 1000, currency: 'coins' },
      },
      {
        id: 4,
        thumb: require('@assets/man/pants-thumb7.png'),
        image: require('@assets/man/pants7.png'),
        price: { icon: require('@assets/gem.png'), value: 50, currency: 'gems' },
      },
      {
        id: 5,
        thumb: require('@assets/man/pants-thumb9.png'),
        image: require('@assets/man/pants9.png'),
        price: { icon: require('@assets/gem.png'), value: 50, currency: 'gems' },
      },
      {
        id: 6,
        thumb: require('@assets/man/pants-thumb11.png'),
        image: require('@assets/man/pants11.png'),
        price: { icon: require('@assets/gem.png'), value: 50, currency: 'gems' },
      },
    ],
    shoes: [
      {
        id: 1,
        thumb: require('@assets/man/shoes-thumb2.png'),
        image: require('@assets/man/shoes2.png'),
        price: { icon: require('@assets/gem.png'), value: 10, currency: 'gems' },
      },
      {
        id: 2,
        thumb: require('@assets/man/shoes-thumb4.png'),
        image: require('@assets/man/shoes4.png'),
        price: { icon: require('@assets/coin.png'), value: 300, currency: 'coins' },
      },
      {
        id: 3,
        thumb: require('@assets/man/shoes-thumb6.png'),
        image: require('@assets/man/shoes6.png'),
        price: { icon: require('@assets/coin.png'), value: 1000, currency: 'coins' },
      },
      {
        id: 4,
        thumb: require('@assets/man/shoes-thumb8.png'),
        image: require('@assets/man/shoes8.png'),
        price: { icon: require('@assets/gem.png'), value: 50, currency: 'gems' },
      },
      {
        id: 5,
        thumb: require('@assets/man/shoes-thumb10.png'),
        image: require('@assets/man/shoes10.png'),
        price: { icon: require('@assets/gem.png'), value: 50, currency: 'gems' },
      },

      {
        id: 6,
        thumb: require('@assets/man/shoes-thumb12.png'),
        image: require('@assets/man/shoes12.png'),
        price: { icon: require('@assets/gem.png'), value: 50, currency: 'gems' },
      },
    ],
  },
  woman: {
    hair: [
      {
        id: 1,
        thumb: require('@assets/woman/hair-thumb8.png'),
        image: require('@assets/woman/hair8.png'),
        price: { icon: require('@assets/gem.png'), value: 10, currency: 'gems' },
      },
      {
        id: 2,
        thumb: require('@assets/woman/hair-thumb10.png'),
        image: require('@assets/woman/hair10.png'),
        price: { icon: require('@assets/coin.png'), value: 300, currency: 'coins' },
      },
      {
        id: 3,
        thumb: require('@assets/woman/hair-thumb12.png'),
        image: require('@assets/woman/hair12.png'),
        price: { icon: require('@assets/coin.png'), value: 1000, currency: 'coins' },
      },
      {
        id: 4,
        thumb: require('@assets/woman/hair-thumb14.png'),
        image: require('@assets/woman/hair14.png'),
        price: { icon: require('@assets/gem.png'), value: 50, currency: 'gems' },
      },
    ],
    shirts: [
      {
        id: 1,
        thumb: require('@assets/woman/shirt-thumb2.png'),
        image: require('@assets/woman/shirt2.png'),
        price: { icon: require('@assets/gem.png'), value: 10, currency: 'gems' },
      },
      {
        id: 2,
        thumb: require('@assets/woman/shirt-thumb4.png'),
        image: require('@assets/woman/shirt4.png'),
        price: { icon: require('@assets/coin.png'), value: 300, currency: 'coins' },
      },
      {
        id: 3,
        thumb: require('@assets/woman/shirt-thumb6.png'),
        image: require('@assets/woman/shirt6.png'),
        price: { icon: require('@assets/coin.png'), value: 1000, currency: 'coins' },
      },
      {
        id: 4,
        thumb: require('@assets/woman/shirt-thumb8.png'),
        image: require('@assets/woman/shirt8.png'),
        price: { icon: require('@assets/gem.png'), value: 50, currency: 'gems' },
      },
    ],
    pants: [
      {
        id: 1,
        thumb: require('@assets/woman/pants-thumb2.png'),
        image: require('@assets/woman/pants2.png'),
        price: { icon: require('@assets/gem.png'), value: 10, currency: 'gems' },
      },
      {
        id: 2,
        thumb: require('@assets/woman/pants-thumb4.png'),
        image: require('@assets/woman/pants4.png'),
        price: { icon: require('@assets/coin.png'), value: 300, currency: 'coins' },
      },
      {
        id: 3,
        thumb: require('@assets/woman/pants-thumb6.png'),
        image: require('@assets/woman/pants6.png'),
        price: { icon: require('@assets/coin.png'), value: 1000, currency: 'coins' },
      },
      {
        id: 4,
        thumb: require('@assets/woman/pants-thumb8.png'),
        image: require('@assets/woman/pants8.png'),
        price: { icon: require('@assets/gem.png'), value: 50, currency: 'gems' },
      },
    ],
    shoes: [
      {
        id: 1,
        thumb: require('@assets/woman/shoes-thumb2.png'),
        image: require('@assets/woman/shoes2.png'),
        price: { icon: require('@assets/gem.png'), value: 10, currency: 'gems' },
      },
      {
        id: 2,
        thumb: require('@assets/woman/shoes-thumb4.png'),
        image: require('@assets/woman/shoes4.png'),
        price: { icon: require('@assets/coin.png'), value: 300, currency: 'coins' },
      },
      {
        id: 3,
        thumb: require('@assets/woman/shoes-thumb6.png'),
        image: require('@assets/woman/shoes6.png'),
        price: { icon: require('@assets/coin.png'), currency: 'coins', value: 1000 },
      },
      // {
      //   id: 4,
      //   thumb: require('@assets/woman/shoes-thumb8.png'),
      //   image: require('@assets/woman/shoes8.png'),
      //   price: { icon: require('@assets/gem.png'), value: 50 , currency:'gems'},
      // },
    ],
  },
};
