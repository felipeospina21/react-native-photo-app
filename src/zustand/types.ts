import { PhotoMock } from '@mocks';

export type State = {
  photos: PhotoMock[];
  topic: string;
};

export type Action = {
  setSelectedTopic: (topic: string) => void;
  addPhoto: (photo: PhotoMock) => void;
  deletePhoto:(photoId:string) => void;
  editPhoto:(photoId:string, updatedTitle:string) => void;
};
