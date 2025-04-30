import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/utils/useAnimateOnScroll';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Shield, MapPin, User } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const AIChatSection = () => {
  const { ref, isVisible } = useAnimateOnScroll();

  const features = [
    {
      icon: Shield,
      title: "Ragging & Discrimination Help",
      description: "Specialized guidance for handling sensitive cases of campus ragging and discrimination"
    },
    {
      icon: MessageSquare,
      title: "24/7 AI Support",
      description: "Get immediate responses and personalized advice anytime, anywhere"
    },
    {
      icon: MapPin,
      title: "Location-Aware Support",
      description: "Connect with the nearest authorities and resources based on your location"
    },
    {
      icon: User,
      title: "Privacy Protected",
      description: "Your conversations are confidential and your identity is protected when you choose"
    }
  ];

  const chatExamples = [
    { 
      question: "I'm facing ragging in my hostel. What should I do?", 
      answer: "I'm sorry to hear that. Ragging is prohibited under UGC regulations. Here's what you can do: 1) Report it through our platform with details 2) Contact your institution's anti-ragging committee 3) Call the UGC Anti-Ragging Helpline at 1800-180-5522..." 
    },
    { 
      question: "How do I report discrimination based on my caste?", 
      answer: "Discrimination based on caste is illegal. You can: 1) Document all instances with dates and details 2) File a formal complaint on our platform 3) Contact the SC/ST Commission helpline at 1800-180-7009..." 
    },
    { 
      question: "My scholarship was cancelled without explanation", 
      answer: "I understand how stressful this can be. Here's how to address it: 1) Request a formal explanation from the scholarship committee 2) Check if the scholarship provider has an appeals process 3) Document all your communications..."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-uranian_blue-900/10 to-background">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-uranian_blue-400/50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-uranian_blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-air_superiority_blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-blue">
              AI Assistance at Your Fingertips
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our intelligent chatbot provides personalized guidance, resources, and support for any campus-related issues you're facing.
            </p>
          </motion.div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-5">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="hover-lift"
                >
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Card className="h-full glass-card hover:border-uranian_blue-400/30 hover-lift">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                          <div className="p-3 rounded-full bg-uranian_blue-100/20 mb-3">
                            <feature.icon className="h-6 w-6 text-uranian_blue-400" />
                          </div>
                          <h3 className="font-medium mb-1">{feature.title}</h3>
                        </CardContent>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="font-medium">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </motion.div>
              ))}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium">How Our AI Assistant Can Help You</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="bg-uranian_blue-400/20 rounded-full h-6 w-6 flex items-center justify-center text-uranian_blue-400 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="text-foreground">Get immediate guidance on how to handle complex situations</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-uranian_blue-400/20 rounded-full h-6 w-6 flex items-center justify-center text-uranian_blue-400 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="text-foreground">Connect with appropriate authorities and resources</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-uranian_blue-400/20 rounded-full h-6 w-6 flex items-center justify-center text-uranian_blue-400 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="text-foreground">Learn about your rights and the proper procedures to follow</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-uranian_blue-400/20 rounded-full h-6 w-6 flex items-center justify-center text-uranian_blue-400 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="text-foreground">Access relevant legal information and documentation</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <Button 
                onClick={() => document.querySelector<HTMLButtonElement>('[aria-label="Open chat assistant"]')?.click()}
                size="lg"
                className="bg-uranian_blue-300 hover:bg-uranian_blue-400 text-white"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Chatting Now
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-uranian_blue-400/10 to-air_superiority_blue-400/5 rounded-2xl"></div>
            
            <Card className="glass-card border-uranian_blue-400/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-outer_space-100 p-3 border-b border-uranian_blue-100/10 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="mx-auto font-medium text-sm text-gray-400">AI Assistant</div>
                </div>
                
                <div className="p-4 h-[400px] overflow-y-auto space-y-4">
                  {/* Welcome message */}
                  <div className="flex items-start gap-3">
                    <div className="bg-uranian_blue-300 text-white rounded-full p-1.5">
                      <MessageSquare size={16} />
                    </div>
                    <div className="bg-uranian_blue-100/10 p-3 rounded-lg text-sm max-w-[80%]">
                      <p>Hello there! I'm your FairCampus assistant. How can I help you today?</p>
                    </div>
                  </div>
                  
                  {/* Example conversations */}
                  {chatExamples.map((chat, i) => (
                    <motion.div 
                      key={i} 
                      className="space-y-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (i * 0.15) }}
                    >
                      <div className="flex justify-end">
                        <div className="bg-uranian_blue-400 text-white p-3 rounded-lg text-sm max-w-[80%]">
                          <p>{chat.question}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-uranian_blue-300 text-white rounded-full p-1.5">
                          <MessageSquare size={16} />
                        </div>
                        <div className="bg-uranian_blue-100/10 p-3 rounded-lg text-sm max-w-[80%]">
                          <p>{chat.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIChatSection;
