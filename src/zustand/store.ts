import type { PhotoMock } from '@mocks';
import create from 'zustand';
import { initialState } from './initialState';
import type { Action, State } from './types';

export const useStore = create<State & Action>((set) => ({
  ...initialState,
  setSelectedTopic: (topic) => {
    set(() => ({ topic }));
  },
  addPhoto: (photo: PhotoMock) =>
    set((state) => {
      const newPhotos = [...state.photos, photo];
      return { photos: newPhotos };
    }),
  deletePhoto: (photoId: string) =>
    set((state) => {
      const newPhotos = state.photos.filter((photo) => photoId !== photo.id);
      return { photos: newPhotos };
    }),
  editPhoto: (photoId: string, updatedTitle: string) =>
    set((state) => {
      const newPhotos = state.photos.map((photo) => {
        if (photo.id === photoId) return { ...photo, title: updatedTitle };
        return photo;
      });
      return { photos: newPhotos };
    }),
}));
