
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/utils/useAnimateOnScroll';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { format } from 'date-fns';
import { generateId, getUser, saveTicket } from '@/utils/localStorage';
import { IssueCategoryTabs } from './IssueCategoryTabs';
import { ConsentCheckbox } from './ConsentCheckbox';
import { LocationPicker } from './LocationPicker';
import { ReportFormData } from './ReportFormTypes';

export const ReportFormContainer = () => {
  const { ref, isVisible } = useAnimateOnScroll();
  const { toast } = useToast();
  const user = getUser();

  const [formData, setFormData] = useState<ReportFormData>({
    type: 'ragging',
    title: '',
    description: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    location: null,
    anonymous: false,
    fileInfo: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        fileInfo: { name: file.name, type: file.type }
      }));
    }
  };

  const handleAnonymousChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, anonymous: checked }));
  };

  const handleLocationSelect = (position: [number, number] | null) => {
    setFormData(prev => ({ ...prev, location: position }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    const locationObj = formData.location ? {
      lat: formData.location[0],
      lng: formData.location[1]
    } : undefined;
    
    const newTicket = {
      id: generateId(),
      userId: user?.id || 'anonymous',
      type: formData.type,
      title: formData.title,
      description: formData.description,
      date: formData.date,
      location: locationObj,
      status: 'Open' as const,
      anonymous: formData.anonymous,
      lastUpdated: new Date().toISOString(),
      fileInfo: formData.fileInfo,
    };
    
    saveTicket(newTicket);
    
    toast({
      title: "Report Submitted",
      description: `Your ticket has been created with ID: ${newTicket.id}. ${formData.location ? "Nearest police station has been notified." : ""}`,
    });
    
    // Reset form
    setFormData({
      type: 'ragging',
      title: '',
      description: '',
      date: format(new Date(), 'yyyy-MM-dd'),
      location: null,
      anonymous: false,
      fileInfo: null,
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
          <CardTitle>Report an Issue</CardTitle>
          <CardDescription>
            Fill in the details about your experience. Your report will help create a safer campus environment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <IssueCategoryTabs 
              formData={formData}
              handleInputChange={handleInputChange}
              handleFileChange={handleFileChange}
              handleAnonymousChange={handleAnonymousChange}
              setFormData={setFormData}
            />
            
            <LocationPicker handleLocationSelect={handleLocationSelect} />
            
            <ConsentCheckbox />
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" onClick={handleSubmit}>Submit Report</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
