import { client } from './client';
import type { QueryParams } from 'next-sanity';

export const sanityFetch = async <T>(query: string, params: QueryParams = {}): Promise<T> => {
  try {
    const result = await client.fetch<T>(query, params);
    return result;
  } catch (error) {
    console.error('Sanity fetch error:', error);
    throw error;
  }
};
