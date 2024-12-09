import { useState } from 'react';
import { Copy, ExternalLink } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';

interface NetworkOption {
  id: 'bep20' | 'trc20' | 'erc20';
  name: string;
  address: string;
  network: string;
  fee: string;
}

export default function TopUpUSDT() {
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkOption['id']>('bep20');

  const networks: NetworkOption[] = [
    {
      id: 'bep20',
      name: 'BEP20 (BSC)',
      address: '0x1234567890abcdef1234567890abcdef12345678',
      network: 'Binance Smart Chain',
      fee: '~$1'
    },
    {
      id: 'trc20',
      name: 'TRC20 (TRON)',
      address: 'TNVs2Soj8J9JnFVkgzZXsrXZUgpw1RjGcu',
      network: 'TRON Network',
      fee: '~$1'
    },
    {
      id: 'erc20',
      name: 'ERC20 (Ethereum)',
      address: '0xabcdef1234567890abcdef1234567890abcdef12',
      network: 'Ethereum Network',
      fee: '~$20-50'
    }
  ];

  const selectedNetworkDetails = networks.find(n => n.id === selectedNetwork)!;

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <PageHeader title="Top Up with USDT" />
      
      <div className="p-4 space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-4 border-b dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Select Network
            </h2>
          </div>
          
          <div className="p-4 space-y-4">
            {networks.map((network) => (
              <button
                key={network.id}
                onClick={() => setSelectedNetwork(network.id)}
                className={`w-full flex items-center justify-between p-4 rounded-lg border ${
                  selectedNetwork === network.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {network.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Network Fee: {network.fee}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Deposit Address ({selectedNetworkDetails.name})
            </h3>
            <div className="mt-2 flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={selectedNetworkDetails.address}
                className="flex-1 p-2 text-sm bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700"
              />
              <button
                onClick={() => copyToClipboard(selectedNetworkDetails.address)}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <Copy className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              Important: Only send USDT on the {selectedNetworkDetails.network}. Sending other tokens may result in permanent loss.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}