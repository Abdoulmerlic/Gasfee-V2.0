import { Send, Repeat, TrendingUp, CreditCard } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    { icon: Send, label: 'Send', color: 'bg-green-500' },
    { icon: Repeat, label: 'Swap', color: 'bg-blue-500' },
    { icon: TrendingUp, label: 'Buy', color: 'bg-purple-500' },
    { icon: CreditCard, label: 'Deposit', color: 'bg-orange-500' }
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {actions.map(({ icon: Icon, label, color }) => (
        <button
          key={label}
          className="flex flex-col items-center"
        >
          <div className={`${color} p-3 rounded-full text-white mb-2`}>
            <Icon size={20} />
          </div>
          <span className="text-sm text-gray-700">{label}</span>
        </button>
      ))}
    </div>
  );
}