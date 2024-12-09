import { ChevronRight } from 'lucide-react';

interface Token {
  symbol: string;
  name: string;
  balance: number;
  price: number;
  icon: string;
  change24h: number;
}

interface TokenListProps {
  tokens: Token[];
  onTokenClick?: (token: Token) => void;
}

export default function TokenList({ tokens, onTokenClick }: TokenListProps) {
  return (
    <div className="space-y-2">
      {tokens.map((token) => (
        <button
          key={token.symbol}
          onClick={() => onTokenClick?.(token)}
          className="w-full flex items-center justify-between p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <img src={token.icon} alt={token.name} className="w-8 h-8 rounded-full" />
            <div className="text-left">
              <p className="font-medium">{token.symbol}</p>
              <p className="text-sm text-gray-500">{token.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-medium">{token.balance.toFixed(4)}</p>
              <p className={`text-sm ${token.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {token.change24h >= 0 ? '+' : ''}{token.change24h}%
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </button>
      ))}
    </div>
  );
}