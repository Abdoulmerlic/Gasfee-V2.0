import WalletCard from '../components/home/WalletCard';
import QuickActions from '../components/home/QuickActions';
import RecentTransactions from '../components/home/RecentTransactions';
import ThemeToggle from '../components/theme/ThemeToggle';

export default function Home() {
  // Mock data - will be replaced with real data from API
  const balance = {
    naira: 150000.00,
    crypto: {
      usdt: 100.50,
      bnb: 0.5
    }
  };

  const recentTransactions = [
    {
      id: '1',
      type: 'receive',
      amount: 50.00,
      currency: 'USDT',
      date: '2024-03-10',
      status: 'completed'
    },
    {
      id: '2',
      type: 'send',
      amount: 0.1,
      currency: 'BNB',
      date: '2024-03-09',
      status: 'completed'
    }
  ] as const;

  return (
    <div className="max-w-md mx-auto p-4 space-y-6 bg-white dark:bg-gray-900">
      <header className="flex items-center justify-between py-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Home</h1>
        <ThemeToggle />
      </header>
      
      <WalletCard balance={balance} />
      <QuickActions />
      <RecentTransactions transactions={recentTransactions} />
    </div>
  );
}