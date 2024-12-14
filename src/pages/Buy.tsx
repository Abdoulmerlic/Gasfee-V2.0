import React, { useEffect, useState } from 'react';
import PageHeader from '../components/shared/PageHeader';
import TokenList from '../components/shared/TokenList';
import { SUPPORTED_COINS, CURRENCY, COINGECKO_API_BASE_URL } from '../components/constants/constants';
import { useTokens } from '../hooks/useTokens';

const tokenLogos: { [key: string]: string } = {
  tether: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
  ethereum: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  solana: 'https://cryptologos.cc/logos/solana-sol-logo.png',
  fantom: 'https://cryptologos.cc/logos/fantom-ftm-logo.png',
  'the-open-network': 'https://cryptologos.cc/logos/toncoin-ton-logo.png',
  sui: 'https://cryptologos.cc/logos/sui-sui-logo.png',
};

export default function Buy() {
  const { data: initialTokenPrices } = useTokens(); // Fetch live token prices
  const [tokenPrices, setTokenPrices] = useState(initialTokenPrices);

  useEffect(() => {
    const updatePrices = () => {
      // Fetch the latest token prices here
      // Assuming useTokens can be called again to get updated prices
      const fetchUpdatedPrices = async () => {
        const updatedPrices = await useTokens(); // Adjust this to your actual fetching logic
        setTokenPrices(updatedPrices.data);
      };

      fetchUpdatedPrices();
    };

    // Update prices every 30 minutes (1800000 milliseconds)
    const intervalId = setInterval(updatePrices, 1800000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const tokens = SUPPORTED_COINS.map(coin => ({
    symbol: coin,
    name: coin.charAt(0).toUpperCase() + coin.slice(1),
    balance: 0, // Placeholder balance
    price: tokenPrices && tokenPrices[coin] ? tokenPrices[coin].usd : 0, // Fetch live price
    icon: tokenLogos[coin] || '', // Get logo from mapping
    change24h: tokenPrices && tokenPrices[coin] ? tokenPrices[coin].usd_24h_change.toFixed(2) : '0.00' // Format change to 2 decimal places
  }));

  return (
    <div className="max-w-md mx-auto">
      <PageHeader title="Buy Tokens" />
      <div className="p-4">
        <TokenList tokens={tokens} />
      </div>
    </div>
  );
}
