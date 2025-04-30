import { useState, useEffect } from 'react';
import StoryCard from '@/components/stories/StoryCard';
import StoryForm from '@/components/stories/StoryForm';
import { Story, getStories } from '@/utils/localStorage';

const Stories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  
  useEffect(() => {
    const fetchedStories = getStories();
    
    // Sort by date, newest first
    fetchedStories.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    setStories(fetchedStories);
  }, []);
  
  return (
    <div className="space-y-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gradient-blue">People's Stories</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real experiences from students who faced challenges on campus. Learn from their stories and share your own.
        </p>
      </div>
      
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} className="hover-lift" />
          ))}
        </div>
      </div>
      
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Video Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/AnCZfC9PFT8" 
              title="Video testimonial about campus issues"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/lTcoRcQq1eI" 
              title="News report on student issues"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/LCZHknoNy4M" 
              title="Legal education on student rights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Share Your Story</h2>
        <StoryForm />
      </div>
    </div>
  );
};

export default Stories;
