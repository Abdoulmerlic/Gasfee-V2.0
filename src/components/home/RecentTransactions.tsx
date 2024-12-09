import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'send' | 'receive';
  amount: number;
  currency: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export default function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${
                tx.type === 'receive' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {tx.type === 'receive' ? (
                  <ArrowDownLeft className="text-green-600" />
                ) : (
                  <ArrowUpRight className="text-red-600" />
                )}
              </div>
              <div>
                <p className="font-medium">{tx.type === 'receive' ? 'Received' : 'Sent'}</p>
                <p className="text-sm text-gray-500">{tx.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">
                {tx.type === 'receive' ? '+' : '-'}{tx.amount} {tx.currency}
              </p>
              <p className={`text-sm ${
                tx.status === 'completed' ? 'text-green-600' :
                tx.status === 'pending' ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}