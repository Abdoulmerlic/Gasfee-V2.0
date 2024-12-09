import { Link } from 'react-router-dom';
import { Home, Wallet, DollarSign, ClipboardList, Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800">
      <div className="flex justify-between p-4">
        <Link to="/" className="flex items-center">
          <Home className="h-6 w-6" />
          <span className="ml-2">Home</span>
        </Link>
        <Link to="/wallet" className="flex items-center">
          <Wallet className="h-6 w-6" />
          <span className="ml-2">Wallet</span>
        </Link>
        {/* Add other links as needed */}
      </div>
    </nav>
  );
} 