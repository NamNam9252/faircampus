import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/utils/useAnimateOnScroll';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { format, parseISO } from 'date-fns';
import { Story } from '@/utils/localStorage';

interface StoryCardProps {
  story: Story;
  index: number;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, index }) => {
  const { ref, isVisible } = useAnimateOnScroll();
  
  const formatDate = (dateStr: string) => {
    try {
      return format(parseISO(dateStr), 'MMM dd, yyyy');
    } catch (error) {
      return dateStr;
    }
  };
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="w-full"
    >
      <Card className="glass-card h-full flex flex-col hover-lift">
        <CardHeader>
          <CardTitle>{story.title}</CardTitle>
          <CardDescription>
            {story.anonymous ? 'Anonymous' : story.author} • {formatDate(story.date)}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-muted-foreground whitespace-pre-line">
            {story.content}
          </p>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          Case ID: {story.id}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default StoryCard;
