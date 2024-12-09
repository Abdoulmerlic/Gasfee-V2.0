import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BottomNav from './components/layout/BottomNav';
import AuthGuard from './components/AuthGuard';
import ThemeProvider from './components/theme/ThemeProvider';
import Login from './pages/Login';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import TopUpNaira from './pages/wallet/TopUpNaira';
import TopUpUSDT from './pages/wallet/TopUpUSDT';
import Buy from './pages/Buy';
import History from './pages/History';
import Settings from './pages/Settings';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <AuthGuard>
                  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-16">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/wallet" element={<Wallet />} />
                      <Route path="/wallet/topup/naira" element={<TopUpNaira />} />
                      <Route path="/wallet/topup/usdt" element={<TopUpUSDT />} />
                      <Route path="/buy" element={<Buy />} />
                      <Route path="/history" element={<History />} />
                      <Route path="/settings" element={<Settings />} />
                    </Routes>
                    <BottomNav />
                  </div>
                </AuthGuard>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;