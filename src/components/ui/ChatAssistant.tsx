import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { generateId, getChatMessages, saveChatMessage, getUser, ChatMessage } from '@/utils/localStorage';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const user = getUser();

  // Auto expand in Services page
  useEffect(() => {
    if (location.pathname === '/services') {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    // Load chat messages from localStorage
    const storedMessages = getChatMessages();
    setMessages(storedMessages);

    // If no messages, add welcome message
    if (storedMessages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: generateId(),
        sender: 'assistant',
        content: `Hello ${user ? user.name : 'there'}! I'm your FairCampus assistant. How can I help you today?`,
        timestamp: new Date().toISOString(),
      };
      saveChatMessage(welcomeMessage);
      setMessages([welcomeMessage]);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: generateId(),
      sender: 'user',
      content: message,
      timestamp: new Date().toISOString(),
    };

    saveChatMessage(userMessage);
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      const responseMessage: ChatMessage = {
        id: generateId(),
        sender: 'assistant',
        content: getAIResponse(message),
        timestamp: new Date().toISOString(),
      };

      saveChatMessage(responseMessage);
      setMessages(prevMessages => [...prevMessages, responseMessage]);
      setIsTyping(false);
    }, 1500);
  };

  // Enhanced AI response function
  const getAIResponse = (userMessage: string): string => {
    const lowerMsg = userMessage.toLowerCase();
    
    if (lowerMsg.includes('ragging') || lowerMsg.includes('bullying')) {
      return "I'm sorry to hear about your experience with ragging. This is a serious offense under UGC regulations. Here's how I can help:\n\n1. Report it through our Services page\n2. Contact the UGC Anti-Ragging Helpline at 1800-202-0743\n3. Document any evidence you have\n4. Consider filing a police complaint\n\nYour safety is our top priority. Would you like me to guide you through the detailed reporting process?";
    } 
    else if (lowerMsg.includes('discrimination') || lowerMsg.includes('bias') || lowerMsg.includes('caste')) {
      return "Discrimination based on caste, religion, gender, or any other factor is prohibited in educational institutions. Here are your options:\n\n1. File a formal complaint through our platform\n2. Contact the SC/ST Commission helpline\n3. Document all instances of discrimination in detail\n4. Seek support from campus equality officers\n\nWould you like information about your legal rights under the SC/ST Prevention of Atrocities Act?";
    } 
    else if (lowerMsg.includes('internship') || lowerMsg.includes('stipend') || lowerMsg.includes('salary')) {
      return "Issues with internships, stipends, and unfair work practices are increasingly common. Here's what you can do:\n\n1. Document all communications with the company\n2. Use our reporting tool to create a case\n3. Contact your university's placement cell\n4. Consider filing a complaint with labor authorities\n\nMany students have successfully resolved such issues by taking these steps. Would you like to see some example cases?";
    } 
    else if (lowerMsg.includes('grading') || lowerMsg.includes('exam') || lowerMsg.includes('marks')) {
      return "Fair evaluation is your right as a student. If you believe there's been bias or error in grading:\n\n1. First request a review from your professor\n2. Document the inconsistencies in detail\n3. Follow your institution's grade appeal procedure\n4. Report through our platform if bias is involved\n\nMost universities have a formal process for grade appeals. Do you need help drafting a request for re-evaluation?";
    } 
    else if (lowerMsg.includes('scholarship') || lowerMsg.includes('financial') || lowerMsg.includes('fees')) {
      return "Financial aid and scholarship issues can be stressful. Here's how to address them:\n\n1. Document all communications and deadlines\n2. Contact your institution's financial aid office\n3. Check if the scholarship provider has an appeals process\n4. Look into emergency financial assistance options\n\nMany institutions have emergency funds for students in need. Would you like me to help you draft an appeal letter?";
    } 
    else if (lowerMsg.includes('location') || lowerMsg.includes('gps') || lowerMsg.includes('map')) {
      return "You can report incident locations through our map feature in the Services section. You have two options:\n\n1. Allow GPS tracking for automatic location detection\n2. Manually place a pin on our interactive map\n\nYour location data helps us identify hotspots and connect you with nearby support resources. Would you like me to guide you to the reporting page?";
    }
    else if (lowerMsg.includes('help') || lowerMsg.includes('how') || lowerMsg.includes('guide')) {
      return "I'm here to guide you through the FairCampus platform. Here's what you can do:\n\n1. Report issues through our Services page\n2. Read about similar cases in Stories\n3. Find important contacts in the Helplines section\n4. Track the status of your reports\n5. Get personalized support through this chat\n\nWhat specific help do you need today?";
    }
    else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
      return `Hello${user ? ' ' + user.name : ''}! Welcome to FairCampus. I'm your AI assistant, here to help with any issues or questions you might have about student rights, reporting concerns, or navigating our platform. How can I assist you today?`;
    } 
    else if (lowerMsg.includes('thanks') || lowerMsg.includes('thank you')) {
      return "You're welcome! I'm here to help anytime you need assistance. Remember, FairCampus is committed to supporting students through difficult situations. Is there anything else I can help you with today?";
    }
    else if (lowerMsg.includes('bye') || lowerMsg.includes('goodbye')) {
      return "Goodbye for now! Remember, FairCampus is here whenever you need support. Don't hesitate to reach out again if you have any questions or concerns.";
    }
    else {
      return "Thank you for sharing. FairCampus is here to support you through any campus-related issues. Based on what you've shared, I recommend:\n\n1. Documenting all relevant details of your situation\n2. Exploring similar cases in our Stories section\n3. Reporting your issue formally through our Services page\n\nWould you like to tell me more about your specific situation so I can provide more targeted assistance?";
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95"
          >
            <Card className="glass-card h-[90vh] w-[90vw] max-w-4xl flex flex-col">
              <CardHeader className="px-4 py-2 flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium">AI Assistant</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                  <X size={18} />
                </Button>
              </CardHeader>
              <CardContent className="p-0 flex-1 overflow-y-auto">
                <ScrollArea className="h-full p-4">
                  <div className="flex flex-col gap-3">
                    {messages.map(msg => (
                      <div 
                        key={msg.id} 
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
                      >
                        {msg.sender === 'user' && user?.avatar && (
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={user.avatar} alt={user.name || 'User'} />
                            <AvatarFallback>{user.name ? user.name[0].toUpperCase() : 'U'}</AvatarFallback>
                          </Avatar>
                        )}
                        <div 
                          className={`max-w-[80%] px-3 py-2 rounded-lg ${
                            msg.sender === 'user' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">{msg.content}</p>
                        </div>
                        {msg.sender === 'assistant' && (
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="/ai-assistant-avatar.png" alt="AI" />
                            <AvatarFallback>AI</AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="max-w-[80%] px-3 py-2 rounded-lg bg-muted">
                          <div className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></span>
                            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></span>
                            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter className="flex w-full gap-2 p-4 border-t border-border">
                <form 
                  className="flex w-full gap-2" 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                >
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 min-h-[40px] resize-none"
                    rows={1}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button type="submit" size="icon" disabled={isTyping || !message.trim()}>
                    {isTyping ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <Button 
            onClick={() => setIsOpen(true)} 
            className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90"
            aria-label="Open chat assistant"
          >
            <MessageSquare />
            <span className="sr-only">Open chat assistant</span>
          </Button>
        </motion.div>
      )}
    </>
  );
};

export default ChatAssistant;
