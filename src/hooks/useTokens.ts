import { useQuery } from '@tanstack/react-query';
import { getTokenPrices } from '../lib/api';

export const useTokens = () => {
  return useQuery({
    queryKey: ['tokens'],
    queryFn: () => getTokenPrices(['tether', 'binancecoin']),
    refetchInterval: 30000, // Refetch every 30 seconds
  });
};