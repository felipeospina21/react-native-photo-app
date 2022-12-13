import { axiosQueryFn } from '@utils';
import Constants from 'expo-constants';
import { useQuery } from 'react-query';
import type { Photos } from '../types';

const API_ACCESS_KEY = Constants.expoConfig?.extra?.apiAccessKey;

export function getPhotos() {
  return useQuery({
    queryKey: ['photos'],
    queryFn: ({ signal }) =>
      axiosQueryFn<Photos[]>({
        baseURL: 'https://api.unsplash.com',
        url: '/photos',
        headers: {
          Authorization: `Client-ID ${API_ACCESS_KEY}`,
        },
        signal,
      }),
  });
}
