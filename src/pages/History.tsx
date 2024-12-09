import { useState } from 'react';
import PageHeader from '../components/shared/PageHeader';
import RecentTransactions from '../components/home/RecentTransactions';

export default function History() {
  const [filter, setFilter] = useState('all');

  const transactions = [
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
    },
    {
      id: '3',
      type: 'receive',
      amount: 25000.00,
      currency: 'NGN',
      date: '2024-03-08',
      status: 'completed'
    }
  ] as const;

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'send', label: 'Sent' },
    { id: 'receive', label: 'Received' }
  ];

  const filteredTransactions = transactions.filter(tx => 
    filter === 'all' ? true : tx.type === filter
  );

  return (
    <div className="max-w-md mx-auto">
      <PageHeader title="Transaction History" />
      <div className="px-4">
        <div className="flex gap-2 mb-4">
          {filters.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <RecentTransactions transactions={filteredTransactions} />
      </div>
    </div>
  );
}