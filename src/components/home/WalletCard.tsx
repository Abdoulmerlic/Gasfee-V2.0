import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

interface WalletCardProps {
  balance: {
    naira: number;
    crypto: {
      usdt: number;
      bnb: number;
    };
  };
}

export default function WalletCard({ balance }: WalletCardProps) {
  const [showBalance, setShowBalance] = useState(true);

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    }).format(amount);
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Total Balance</h2>
        <button
          onClick={() => setShowBalance(!showBalance)}
          className="p-2 hover:bg-blue-500 rounded-full transition-colors"
        >
          {showBalance ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-blue-100">Naira Balance</p>
          <p className="text-2xl font-bold">
            {showBalance ? formatNaira(balance.naira) : '•••••••'}
          </p>
        </div>

        <div className="flex gap-4">
          <div>
            <p className="text-sm text-blue-100">USDT</p>
            <p className="font-semibold">
              {showBalance ? balance.crypto.usdt.toFixed(2) : '•••'}
            </p>
          </div>
          <div>
            <p className="text-sm text-blue-100">BNB</p>
            <p className="font-semibold">
              {showBalance ? balance.crypto.bnb.toFixed(4) : '•••'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}