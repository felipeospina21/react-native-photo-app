import { Photos } from "@api";
import { userMock } from "./user";

export const photosMock: Photos = {
  id: '1',
  updated_at: '1002',
  description: 'some photo',
  alt_description: '',
  created_at: '1001',
  width: 1000,
  height: 2000,
  color:'red',
  blur_hash: '',
  likes: 100,
  liked_by_user: false,
  user: {
    ...userMock,
    id: '123',
    bio: 'some bio',
  },

}