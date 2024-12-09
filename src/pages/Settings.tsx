import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import { userAtom } from '../lib/atoms';

export default function Settings() {
  const setUser = useSetAtom(userAtom);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  const settingsSections = [
    {
      title: 'Account',
      items: [
        { label: 'Profile', onClick: () => navigate('/settings/profile') },
        { label: 'Security', onClick: () => navigate('/settings/security') },
        { label: 'Notifications', onClick: () => navigate('/settings/notifications') }
      ]
    },
    {
      title: 'Support',
      items: [
        { label: 'Help Center', onClick: () => navigate('/settings/help') },
        { label: 'About', onClick: () => navigate('/settings/about') }
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
              {section.items.map(({ label, onClick }) => (
                <button
                  key={label}
                  onClick={onClick}
                  className="w-full flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
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
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}