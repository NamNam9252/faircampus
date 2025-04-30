import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getUser } from '@/utils/localStorage';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{name: string, avatar?: string} | null>(null);
  const location = useLocation();
  
  useEffect(() => {
    const userData = getUser();
    setUser(userData);

    // Listen for storage changes
    const handleStorageChange = () => {
      const updatedUserData = getUser();
      setUser(updatedUserData);
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Stories', path: '/stories' },
    { name: 'Helplines', path: '/helplines' },
  ];
  
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-sm bg-background/50 border-b border-b-secondary/20">
      <nav className="container flex items-center justify-between h-16 mx-auto">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-gradient-blue">FairCampus</h1>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 text-gradient-blue">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm font-medium hover:text-gradient-gold transition-colors ${
                  location.pathname === link.path
                    ? 'text-gradient-blue'
                    : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <ThemeToggle />
          
          {user ? (
            <Link to="/login" className="flex items-center space-x-2">
              <Avatar className="w-8 h-8">
                {user.avatar ? (
                  <AvatarImage src={user.avatar} alt={user.name} />
                ) : (
                  <AvatarFallback>{user.name ? user.name[0] : 'U'}</AvatarFallback>
                )}
              </Avatar>
              <span className="text-sm">{user.name}</span>
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="default" size="sm">
                Login
              </Button>
            </Link>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            className="text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden container pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm rounded-md ${
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-accent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {user ? (
                <Link to="/login" className="flex items-center px-4 py-2 space-x-2">
                  <Avatar className="w-8 h-8">
                    {user.avatar ? (
                      <AvatarImage src={user.avatar} alt={user.name} />
                    ) : (
                      <AvatarFallback>{user.name ? user.name[0] : 'U'}</AvatarFallback>
                    )}
                  </Avatar>
                  <span>{user.name}</span>
                </Link>
              ) : (
                <Link to="/login" className="px-4 py-2">
                  <Button variant="default" size="sm">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
