import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [quote, setQuote] = useState('');
  
  const quotes = [
    "You are not alone in this journey.",
    "Every voice deserves to be heard.",
    "Change begins with speaking up.",
    "Together, we can create a safer campus.",
    "Your courage inspires others.",
    "Justice starts with awareness."
  ];
  
  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    
    const interval = setInterval(() => {
      const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(newQuote);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-gradient-primary mb-2">FairCampus</h2>
            <p className="text-muted-foreground">A safe space for students to report and track grievances.</p>
            <blockquote className="mt-4 border-l-2 border-primary pl-4 italic">
              <p className="animate-fade-in">{quote}</p>
            </blockquote>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link to="/stories" className="text-muted-foreground hover:text-primary">Stories</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link to="/helplines" className="text-muted-foreground hover:text-primary">Helplines</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">support@faircampus.org</li>
              <li className="text-muted-foreground">All data is stored locally in your browser.</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} FairCampus. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} TiaSukhnanni</p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">Privacy-first platform for student support</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
