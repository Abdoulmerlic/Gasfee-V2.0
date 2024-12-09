import PageHeader from '../components/shared/PageHeader';
import TokenList from '../components/shared/TokenList';

export default function Buy() {
  const tokens = [
    {
      symbol: 'USDT',
      name: 'Tether USD',
      balance: 0,
      price: 1.00,
      icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
      change24h: 0.01
    },
    {
      symbol: 'BNB',
      name: 'Binance Coin',
      balance: 0,
      price: 320.15,
      icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
      change24h: 2.5
    }
  ];

  return (
    <div className="max-w-md mx-auto">
      <PageHeader title="Buy Tokens" />
      <div className="p-4">
        <div className="bg-white p-4 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-2">Buy with Naira</h2>
          <p className="text-gray-600 text-sm">
            Select a token below to buy using your Naira balance
          </p>
        </div>
        <TokenList tokens={tokens} />
      </div>
    </div>
  );
}