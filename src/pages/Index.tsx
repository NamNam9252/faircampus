
import HeroSection from '@/components/home/HeroSection';
import QuickLinks from '@/components/home/QuickLinks';
import AIChatSection from '@/components/home/AIChatSection';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/utils/useAnimateOnScroll';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Activity, Users, BookOpen, Shield } from 'lucide-react';

const StatsSection = () => {
  const { ref, isVisible } = useAnimateOnScroll();
  
  const stats = [
    { label: 'Cases Resolved', value: '500+', icon: Activity },
    { label: 'Universities Covered', value: '100+', icon: Users },
    { label: 'Student Stories', value: '1000+', icon: BookOpen },
    { label: 'Support Resources', value: '50+', icon: Shield },
  ];
  
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter mb-2 text-gradient-blue">Our Impact</h2>
          <p className="text-muted-foreground mx-auto max-w-[700px]">
            Making a difference in students' lives across the country
          </p>
        </div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-card text-center hover-glow border-uranian_blue-100/20 hover:border-uranian_blue-400/30">
                <CardHeader className="pb-2 pt-6">
                  <div className="mx-auto p-2 rounded-full bg-uranian_blue-100/20 mb-3">
                    <stat.icon className="h-6 w-6 text-uranian_blue-400" />
                  </div>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-uranian_blue">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base">{stat.label}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedStoriesSection = () => {
  const { ref, isVisible } = useAnimateOnScroll();
  const navigate = useNavigate();
  
  const stories = [
    {
      title: "Fighting Discrimination",
      author: "Rahul K.",
      excerpt: "When I faced caste-based discrimination in my dormitory, FairCampus helped me report it formally...",
      videoId: "AnCZfC9PFT8"
    },
    {
      title: "Overcoming Ragging",
      author: "Priya M.",
      excerpt: "Senior students were making life difficult for freshers. With FairCampus' resources, we organized...",
      videoId: "lTcoRcQq1eI"
    },
    {
      title: "Scholarship Restored",
      author: "Ahmed S.",
      excerpt: "My scholarship was suddenly cancelled without explanation. Using the platform's guidelines...",
      videoId: "LCZHknoNy4M"
    }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-b from-background to-uranian_blue-900/10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter mb-2 text-gradient-blue">Featured Stories</h2>
          <p className="text-muted-foreground mx-auto max-w-[700px]">
            Real experiences shared by students who stood up for their rights
          </p>
        </div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="hover-lift"
            >
              <Card className="glass-card h-full flex flex-col border-uranian_blue-100/20 hover:border-uranian_blue-400/30">
                <div className="aspect-video w-full overflow-hidden">
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${story.videoId}?si=bQOYNQwT99_Bs51u`} 
                    title={story.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <CardHeader>
                  <CardTitle className="text-uranian_blue-400">{story.title}</CardTitle>
                  <CardDescription>{story.author}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{story.excerpt}</p>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button 
                    variant="outline" 
                    className="w-full border-uranian_blue-400/20 hover:bg-uranian_blue-100/20 group"
                    onClick={() => navigate('/stories')}
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-8 text-center">
          <Button 
            onClick={() => navigate('/stories')}
            variant="default"
            className="bg-uranian_blue-300 hover:bg-uranian_blue-400 text-white group"
          >
            View All Stories
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const { ref, isVisible } = useAnimateOnScroll();
  
  const steps = [
    {
      number: "01",
      title: "Report an Issue",
      description: "Submit details about your experience through our easy-to-use form."
    },
    {
      number: "02",
      title: "Get Guidance",
      description: "Receive personalized advice from our AI assistant and community resources."
    },
    {
      number: "03",
      title: "Track Progress",
      description: "Follow updates on your case and connect with support resources."
    },
    {
      number: "04",
      title: "Resolution",
      description: "Achieve resolution and share your experience to help others."
    }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-b from-uranian_blue-900/10 to-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter mb-2 text-gradient-blue">How It Works</h2>
          <p className="text-muted-foreground mx-auto max-w-[700px]">
            Your journey to justice is just a few steps away
          </p>
        </div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="hover-lift"
            >
              <Card className="glass-card relative border-t-4 border-t-uranian_blue-400 hover-glow border-uranian_blue-100/20 hover:border-uranian_blue-400/30">
                <div className="absolute -top-4 left-4 bg-uranian_blue-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-uranian_blue-400">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <AIChatSection />
      <FeaturedStoriesSection />
      <QuickLinks />
    </div>
  );
};

export default Index;
