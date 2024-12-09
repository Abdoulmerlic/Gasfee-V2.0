import PageHeader from '../components/shared/PageHeader';
import TokenList from '../components/shared/TokenList';
import TopUpOptions from '../components/wallet/TopUpOptions';

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
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Top Up Options
          </h2>
          <TopUpOptions />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Your Assets
          </h2>
          <TokenList tokens={tokens} />
        </div>
      </div>
    </div>
  );
}