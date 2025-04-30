
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';

interface FormFieldsProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAnonymousChange: (checked: boolean) => void;
}

export const FormFields: React.FC<FormFieldsProps> = ({ 
  formData, 
  handleInputChange, 
  handleFileChange, 
  handleAnonymousChange 
}) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input 
          id="title" 
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Brief title of your issue"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea 
          id="description" 
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Please provide details about what happened..."
          rows={5}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="date">Date of Incident</Label>
        <Input 
          id="date" 
          name="date"
          type="date"
          value={formData.date}
          onChange={handleInputChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="evidence">Evidence (Optional)</Label>
        <Input 
          id="evidence" 
          name="evidence"
          type="file"
          onChange={handleFileChange}
        />
        <p className="text-xs text-muted-foreground">
          Note: Files are not actually uploaded in this demo, only the metadata is saved.
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <Switch 
          id="anonymous" 
          checked={formData.anonymous}
          onCheckedChange={handleAnonymousChange}
        />
        <Label htmlFor="anonymous">Submit anonymously</Label>
      </div>
    </>
  );
};
