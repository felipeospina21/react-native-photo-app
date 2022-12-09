import create from 'zustand';
import { initialState } from './initialState';
import type { Action, State } from './types';

export const useStore = create<State & Action>((set) => ({
  ...initialState,
  useBalance: (type, cost) => {
    set((state) => {
      if (state.balance[type] >= cost) {
        return {
          balance: { ...state.balance, [type]: state.balance[type] - cost },
        };
      }
      return state;
    });
  },
  buyAsset: ({ gender, type, id }) => {
    set((state) => {
      return {
        assetsOwned: {
          ...state.assetsOwned,
          [gender]: {
            ...state.assetsOwned[gender],
            [type]: [...state.assetsOwned[gender][type], id],
          },
        },
      };
    });
  },
}));
