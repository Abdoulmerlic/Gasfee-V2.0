import { useQuery } from '@tanstack/react-query';
import { getTokenPrices } from '../lib/api';

export const useTokens = () => {
  return useQuery({
    queryKey: ['tokens'],
    queryFn: async () => {
      try {
        const prices = await getTokenPrices(['tether', 'ethereum', 'solana', 'fantom', 'the-open-network', , 'sui']);
        console.log('Fetched Prices:', prices);
        return prices;
      } catch (error) {
        console.error('Error fetching token prices:', error);
        throw error; // Rethrow the error to be handled by the query
      }
    },
    refetchInterval: 1800000, // Refetch every 30 seconds
    refetchOnWindowFocus: true, 
  });
};