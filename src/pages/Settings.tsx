import { LogOut, User, Bell, Shield, HelpCircle, Info } from 'lucide-react';
import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import { userAtom, logout } from '../lib/auth';

export default function Settings() {
  const setUser = useSetAtom(userAtom);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate('/login');
  };

  const settingsSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Profile', onClick: () => {} },
        { icon: Shield, label: 'Security', onClick: () => {} },
        { icon: Bell, label: 'Notifications', onClick: () => {} }
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', onClick: () => {} },
        { icon: Info, label: 'About', onClick: () => {} }
      ]
    }
  ];

  return (
    <div className="max-w-md mx-auto">
      <PageHeader title="Settings" />
      <div className="p-4 space-y-6">
        {settingsSections.map((section) => (
          <div key={section.title}>
            <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              {section.title}
            </h2>
            <div className="space-y-2">
              {section.items.map(({ icon: Icon, label, onClick }) => (
                <button
                  key={label}
                  onClick={onClick}
                  className="w-full flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-900 dark:text-white">{label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
        
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-4 text-red-600 bg-white dark:bg-gray-800 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors mt-6"
        >
          <LogOut className="h-5 w-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}