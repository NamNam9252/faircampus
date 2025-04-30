
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/utils/useAnimateOnScroll';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Book, FileText, Map, Home, User } from 'lucide-react';

const QuickLinks = () => {
  const { ref, isVisible } = useAnimateOnScroll();
  
  const links = [
    {
      title: 'Report Issues',
      description: 'Submit and track your grievances',
      icon: FileText,
      href: '/services',
    },
    {
      title: 'Read Stories',
      description: 'Learn from others\' experiences',
      icon: Book,
      href: '/stories',
    },
    {
      title: 'Find Helplines',
      description: 'Access emergency contacts and resources',
      icon: Map,
      href: '/helplines',
    },
    {
      title: 'About Us',
      description: 'Learn about our mission',
      icon: Home,
      href: '/about',
    },
    {
      title: 'Your Profile',
      description: 'Manage your account',
      icon: User,
      href: '/login',
    },
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  
  return (
    <section className="py-12 bg-gradient-to-b from-background to-uranian_blue-900/10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter mb-2 text-gradient-blue">
            Quick Access
          </h2>
          <p className="text-muted-foreground mx-auto max-w-[700px]">
            Navigate to key areas of the platform to report issues, find resources, or learn from others.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {links.map((link, index) => (
            <motion.div key={index} variants={item} className="hover-scale hover-glow">
              <Link to={link.href}>
                <Card className="h-full glass-card border border-uranian_blue-100/20 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-uranian_blue-400/0 via-uranian_blue-400/0 to-uranian_blue-400/0 group-hover:from-uranian_blue-400/10 group-hover:via-uranian_blue-400/5 group-hover:to-uranian_blue-400/0 transition-all duration-500"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 group-hover:text-uranian_blue-400 transition-colors">
                      <div className="p-2 rounded-full bg-uranian_blue-100/20 text-uranian_blue-400 group-hover:bg-uranian_blue-400/30 transition-all duration-300">
                        <link.icon className="h-5 w-5" />
                      </div>
                      {link.title}
                    </CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickLinks;
