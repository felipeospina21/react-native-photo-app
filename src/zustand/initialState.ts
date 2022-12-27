import type { State } from './types';
import { userMock } from '@mocks'

export const initialState: State = {
  photos: userMock.photos,
  topic: 'office'
};
