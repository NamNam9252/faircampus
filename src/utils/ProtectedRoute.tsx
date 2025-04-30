
import { Navigate, Outlet } from 'react-router-dom';
import { getUser } from './localStorage';
import { useToast } from '@/components/ui/use-toast';

export const ProtectedRoute = () => {
  const user = getUser();
  const { toast } = useToast();
  
  if (!user) {
    toast({
      title: "Authentication Required",
      description: "Please login to access this page",
      variant: "destructive",
    });
    return <Navigate to="/login" replace />;
  }
  
  return <Outlet />;
};

export default ProtectedRoute;
