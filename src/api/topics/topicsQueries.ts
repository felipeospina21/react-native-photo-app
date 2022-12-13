import { axiosQueryFn } from '@utils';
import { useQuery } from 'react-query';
import type { Topics } from '../types'
import Constants from 'expo-constants'

const API_ACCESS_KEY = Constants.expoConfig?.extra?.apiAccessKey

export function getTopics() {
  return useQuery({
    queryKey: ['topics'],
    queryFn: ({ signal }) =>
      axiosQueryFn<Topics[]>({
        baseURL: 'https://api.unsplash.com',
        url: `/topics`,
        headers: {
          Authorization: `Client-ID ${API_ACCESS_KEY}`,
        },
        signal,
      }),
  });
}
