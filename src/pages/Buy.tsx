import PageHeader from '../components/shared/PageHeader';
import TokenList from '../components/shared/TokenList';
import { SUPPORTED_COINS, CURRENCY } from '../components/constants/constants';
import { useTokens } from '../hooks/useTokens';

const tokenLogos: { [key: string]: string } = {
  tether: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
  ethereum: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  solana: 'https://cryptologos.cc/logos/solana-sol-logo.png',
  fantom: 'https://cryptologos.cc/logos/fantom-ftm-logo.png',
  'the-open-network': 'https://cryptologos.cc/logos/the-open-network-ton-logo.png',
};

export default function Buy() {
  const { data: tokenPrices } = useTokens(); // Fetch live token prices

  const tokens = SUPPORTED_COINS.map(coin => ({
    symbol: coin,
    name: coin.charAt(0).toUpperCase() + coin.slice(1),
    balance: 0, // Placeholder balance
    price: tokenPrices ? tokenPrices[coin]?.usd : 0, // Fetch price from tokenPrices
    icon: tokenLogos[coin] || '', // Get logo from mapping
    change24h: tokenPrices ? tokenPrices[coin]?.change_24h : 0 // Fetch 24h change
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
