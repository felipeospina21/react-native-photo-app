import type { State } from './types';
export const initialState: State = {
  balance: {
    coins: 3000,
    gems: 30,
  },
  assetsOwned: {
    man: {
      hair: [],
      shirts: [],
      pants: [],
      shoes: [],
    },
    woman: {
      hair: [],
      shirts: [],
      pants: [],
      shoes: [],
    },
  },
};
