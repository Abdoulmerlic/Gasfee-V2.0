export const COINGECKO_API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const SUPPORTED_COINS = [
  'tether',
  'ethereum',
  'solana',
  'fantom',
  'the-open-network',
  'sui'
] as const;

export const CURRENCY = {
  NAIRA: '₦',
  USD: '$',
} as const;