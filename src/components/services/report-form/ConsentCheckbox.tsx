
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export const ConsentCheckbox = () => {
  return (
    <div className="mt-6 flex items-center gap-2">
      <Checkbox id="consent" required />
      <Label htmlFor="consent">
        I confirm that the information provided is accurate to the best of my knowledge
      </Label>
    </div>
  );
};
