
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatAssistant from '@/components/ui/ChatAssistant';
import { initializeDefaultData } from '@/utils/localStorage';

const MainLayout = () => {
  useEffect(() => {
    // Initialize default data when the app starts
    initializeDefaultData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 container py-8">
        <Outlet />
      </main>
      <ChatAssistant />
      <Footer />
    </div>
  );
};

export default MainLayout;
