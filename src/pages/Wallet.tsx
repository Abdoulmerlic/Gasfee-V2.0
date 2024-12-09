import PageHeader from '../components/shared/PageHeader';
import TopUpOptions from '../components/wallet/TopUpOptions';
import TokenList from '../components/shared/TokenList';

export default function Wallet() {
  const tokens = [
    {
      symbol: 'USDT',
      name: 'Tether USD',
      balance: 100.50,
      price: 1.00,
      icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
      change24h: 0.01
    },
    {
      symbol: 'BNB',
      name: 'Binance Coin',
      balance: 0.5,
      price: 320.15,
      icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
      change24h: 2.5
    }
  ];

  return (
    <div className="max-w-md mx-auto">
      <PageHeader title="Wallet" />
      <div className="p-4 space-y-6">
        <TopUpOptions />
        <TokenList tokens={tokens} />
      </div>
    </div>
  );
}