import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

export const getTokenPrices = async (ids: string[]) => {
  const response = await api.get('/simple/price', {
    params: {
      ids: ids.join(','),
      vs_currencies: 'usd',
      include_24hr_change: true,
    },
  });
  return response.data;
};

export const generateWallet = async () => {
  const response = await axios.post('/api/wallet/generate');
  return response.data;
};