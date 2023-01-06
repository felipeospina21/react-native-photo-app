import { axiosQueryFn } from '@utils';
import Constants from 'expo-constants';
import { useQuery } from 'react-query';
import type { PhotosQuery } from '../types';

const API_ACCESS_KEY =
  process.env.NODE_ENV === 'test' ? 'test' : Constants.expoConfig?.extra?.apiAccessKey;

export function getPhotos(query: string) {
  return useQuery({
    queryKey: ['photos', query],
    queryFn: ({ queryKey, signal }) => {
      const [, query] = queryKey;
      const queryValue = query ? query : 'office';
      return axiosQueryFn<PhotosQuery>({
        baseURL: 'https://api.unsplash.com',
        url: '/search/photos',
        headers: {
          Authorization: `Client-ID ${API_ACCESS_KEY}`,
        },
        params: {
          query: queryValue,
        },
        signal,
      });
    },
  });
}
