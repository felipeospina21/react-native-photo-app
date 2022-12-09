import { axiosQueryFn } from '@utils';
import { useQuery } from 'react-query';
import type { Collections } from './types'
import Constants from 'expo-constants'

const API_ACCESS_KEY = Constants.expoConfig?.extra?.apiAccessKey

export function getCollections() {
  return useQuery({
    queryKey: ['collections'],
    queryFn: ({ signal }) =>
      axiosQueryFn<Collections[]>({
        baseURL: 'https://api.unsplash.com',
        url: '/collections',
        headers: {
          Authorization: `Client-ID ${API_ACCESS_KEY}`,
        },
        params:{
          page: 2,
        },
        signal,
      }),
  });
}
