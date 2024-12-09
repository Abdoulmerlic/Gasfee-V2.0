import { atom } from 'jotai';

export interface User {
  id: string;
  email: string;
  walletAddress: string;
}

// Initialize user from localStorage if available
const initialUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user')!)
  : null;

export const userAtom = atom<User | null>(initialUser);
export const isLoadingAtom = atom(true);

export const login = async (email: string, password: string): Promise<User> => {
  // Simulated login - replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = {
        id: '1',
        email,
        walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
      };
      // Store user in localStorage
      localStorage.setItem('user', JSON.stringify(user));
      resolve(user);
    }, 1000);
  });
};

export const logout = () => {
  localStorage.removeItem('user');
};