
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FormFields } from './FormFields';

export const issueCategories = [
  { id: 'ragging', label: 'Ragging' },
  { id: 'discrimination', label: 'Discrimination' },
  { id: 'internship', label: 'Internship Issues' },
  { id: 'grading', label: 'Grading Bias' },
  { id: 'scholarship', label: 'Scholarship Problems' },
];

interface IssueCategoryTabsProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAnonymousChange: (checked: boolean) => void;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export const IssueCategoryTabs: React.FC<IssueCategoryTabsProps> = ({ 
  formData, 
  handleInputChange, 
  handleFileChange, 
  handleAnonymousChange,
  setFormData 
}) => {
  return (
    <Tabs defaultValue="ragging">
      <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-6">
        {issueCategories.map(category => (
          <TabsTrigger 
            key={category.id} 
            value={category.id}
            onClick={() => setFormData(prev => ({ ...prev, type: category.id }))}
          >
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {issueCategories.map(category => (
        <TabsContent key={category.id} value={category.id} className="space-y-4">
          <FormFields 
            formData={formData}
            handleInputChange={handleInputChange}
            handleFileChange={handleFileChange}
            handleAnonymousChange={handleAnonymousChange}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
};
