import desert from '@assets/images/desert.jpg'
import mountain from '@assets/images/mountain.jpg'
import sunset from '@assets/images/sunset.jpg'
import type { ImageSourcePropType } from 'react-native'

export interface PhotoMock {
  id: string;
  title: string;
  url?: string;
  image?: ImageSourcePropType;
  collection?: string;
}
export interface UserMock {
  name: string;
  lastname: string;
  username: string;
  image: string;
  photos: PhotoMock[];
  followers: string[];
  score: number;
}
export const userMock: UserMock = {
  name: 'Lina',
  lastname: 'Rios',
  username: '@lina_rios',
  image:
    'https://media.istockphoto.com/id/1141152348/photo/cat-with-lasers-from-eyes-minimal-collage-fashion-concept.jpg?s=612x612&w=0&k=20&c=032mYmlK7a5YOCriW36UY-vPFA0ugY2gMeXtm1UKTEk=',
  photos: [
    {
      id: 'e46642cf-b4dc-43b6-bb27-9c89c3490998',
      title: 'Sunset',
      image: sunset
    
    },
    {
      id: 'cb26a001-b21d-472a-aa3e-46eab9384f41',
      title: 'Desert',
      image: desert
    },
    {
      id: '10622ed1-68fd-4dcf-ada9-a1cd566eabec',
      title: 'Mountain',
      image: mountain
    },
    {
      id: '10622ed1-68fd-4dcf-ada9',
      title: 'Mountain2',
      image: mountain
    },
  ],
  followers: ['1', '2', '3', '4', '5'],
  score: 35,
};
