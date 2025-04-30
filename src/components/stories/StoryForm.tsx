
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/utils/useAnimateOnScroll';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { generateId, getUser, saveStory } from '@/utils/localStorage';
import { useToast } from '@/components/ui/use-toast';

const StoryForm = () => {
  const { ref, isVisible } = useAnimateOnScroll();
  const { toast } = useToast();
  const user = getUser();
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    anonymous: false,
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleAnonymousChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, anonymous: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please login to submit your story.",
        variant: "destructive",
      });
      return;
    }
    
    const newStory = {
      id: generateId(),
      author: user.name,
      title: formData.title,
      content: formData.content,
      date: new Date().toISOString(),
      anonymous: formData.anonymous,
    };
    
    saveStory(newStory);
    
    toast({
      title: "Story Submitted",
      description: "Your story has been shared with the community.",
    });
    
    // Reset form
    setFormData({
      title: '',
      content: '',
      anonymous: false,
    });
  };
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Share Your Story</CardTitle>
          <CardDescription>
            Your experience can help others. Share your story with the community.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Give your story a title"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="content">Your Story</Label>
              <Textarea 
                id="content" 
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Share your experience..."
                rows={6}
                required
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Switch 
                id="anonymous" 
                checked={formData.anonymous}
                onCheckedChange={handleAnonymousChange}
              />
              <Label htmlFor="anonymous">Share anonymously</Label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" onClick={handleSubmit}>
            {user ? 'Share Story' : 'Login to Share'}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default StoryForm;
