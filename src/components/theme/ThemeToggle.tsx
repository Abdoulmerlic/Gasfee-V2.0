import { useAtom } from 'jotai';
import { Sun, Moon } from 'lucide-react';
import { themeAtom, toggleTheme } from '../../lib/theme';

export default function ThemeToggle() {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <button
      onClick={() => setTheme(toggleTheme)}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      ) : (
        <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      )}
    </button>
  );
}