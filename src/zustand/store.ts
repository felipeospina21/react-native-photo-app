import create from 'zustand';
import { initialState } from './initialState';
import type { Action, State } from './types';

export const useStore = create<State & Action>((set) => ({
  ...initialState,
  setSelectedTopic: (topic) => {
    set(() => ({ topic }));
  },
}));
