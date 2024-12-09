import { Wallet, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopUpOptions() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <Link
        to="/wallet/topup/naira"
        className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
      >
        <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
          <CreditCard className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">Top Up with Naira</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Instant deposit using bank transfer
          </p>
        </div>
      </Link>

      <Link
        to="/wallet/topup/usdt"
        className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
      >
        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
          <Wallet className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">Top Up with USDT</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Deposit using BEP20, TRC20, or ERC20
          </p>
        </div>
      </Link>
    </div>
  );
}