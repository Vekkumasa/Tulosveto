import axios, {AxiosRequestConfig} from 'axios';
import {APIResponse} from '../types/types';
// @ts-ignore
import {API_KEY} from '@env';

export const request = async (url: string) => {
  if (API_KEY) {
    const options: AxiosRequestConfig = {
      method: 'GET',
      url,
      headers: {
        'x-rapidapi-key': API_KEY,
      },
    };
    const promise = await axios.request<APIResponse>(options);

    return promise.data.api.fixtures;
  }
  return [];
};
