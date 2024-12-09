import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/shared/PageHeader';

export default function TopUpNaira() {
  const [virtualAccount, setVirtualAccount] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const generateVirtualAccount = async () => {
    setIsLoading(true);
    try {
      // Simulate API call to generate virtual account
      await new Promise(resolve => setTimeout(resolve, 1000));
      setVirtualAccount('9876543210'); // Replace with actual API integration
    } catch (error) {
      console.error('Failed to generate virtual account:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <PageHeader title="Top Up with Naira" />
      
      <div className="p-4 space-y-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Bank Transfer Details
          </h2>
          
          {!virtualAccount ? (
            <button
              onClick={generateVirtualAccount}
              disabled={isLoading}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Generating Account...' : 'Generate Virtual Account'}
            </button>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Bank Name</p>
                <p className="font-medium text-gray-900 dark:text-white">Providus Bank</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Account Number</p>
                <p className="font-medium text-gray-900 dark:text-white">{virtualAccount}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Account Name</p>
                <p className="font-medium text-gray-900 dark:text-white">Crypto Wallet Virtual Account</p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            Funds will be credited to your wallet automatically once payment is confirmed.
          </p>
        </div>
      </div>
    </div>
  );
}