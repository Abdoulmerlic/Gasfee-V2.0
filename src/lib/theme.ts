import { atom } from 'jotai';

type Theme = 'light' | 'dark';

export const themeAtom = atom<Theme>('light');

export const toggleTheme = (theme: Theme): Theme => {
  return theme === 'light' ? 'dark' : 'light';
};