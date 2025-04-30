
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/utils/useAnimateOnScroll';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, User, FileText } from 'lucide-react';

const HeroSection = () => {
  const { ref, isVisible } = useAnimateOnScroll();
  const navigate = useNavigate();
  
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 ">
        <iframe 
          src="https://skybox.blockadelabs.com/e/32ebc15d0e322cb3f3d7aa3b8b9e2957"
          width="100%" 
          height="100%" 
          style={{ border: 0, opacity: 0.4 }} 
          allowFullScreen 
          title="Interactive 3D Scene Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 backdrop-blur-sm"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-uranian_blue-100/20 text-uranian_blue-400 border border-uranian_blue-400/20"
              >
                <Shield size={14} />
                <span className="text-sm font-medium">Empowering Students</span>
              </motion.div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="text-gradient-blue">FairCampus</span>
                <span className="block text-2xl sm:text-3xl mt-2 text-foreground/90">Your Voice for Campus Justice</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A safe, AI-powered space to report and track student grievances. Empowering you to speak up against ragging, discrimination, and unfair practices.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate('/services')}
                size="lg" 
                className="bg-uranian_blue-300 hover:bg-uranian_blue-400 text-white group"
              >
                Report an Issue
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => navigate('/stories')}
                size="lg" 
                variant="outline"
                className="border-uranian_blue-400/30 hover:bg-uranian_blue-100/20"
              >
                Read Stories
              </Button>
            </div>
            
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-uranian_blue-400/80 flex items-center justify-center text-xs font-bold text-white"
                  >
                    <User size={14} />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Joined by <span className="font-bold text-foreground">1,000+</span> students this month
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-uranian_blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-air_superiority_blue-400/20 rounded-full blur-3xl"></div>
            
            <div className="w-full max-w-md aspect-square rounded-2xl shadow-2xl overflow-hidden relative glass-card border border-white/20">
              <iframe 
                src="https://skybox.blockadelabs.com/e/32ebc15d0e322cb3f3d7aa3b8b9e2957"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                title="Interactive 3D Scene"
                className="w-full h-full"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-uranian_blue-300/80">
                    <FileText size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Create Your Report</h4>
                    <p className="text-white/80 text-sm">We're here to help</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-uranian_blue-400/50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
