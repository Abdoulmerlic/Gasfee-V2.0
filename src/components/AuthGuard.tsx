import { useAtomValue } from 'jotai';
import { Navigate, useLocation } from 'react-router-dom';
import { userAtom } from '../lib/auth';

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const user = useAtomValue(userAtom);
  const location = useLocation();

  if (!user) {
    // Redirect to login while saving the attempted url
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}