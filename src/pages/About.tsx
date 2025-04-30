import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/utils/useAnimateOnScroll';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { ref: ref1, isVisible: isVisible1 } = useAnimateOnScroll();
  const { ref: ref2, isVisible: isVisible2 } = useAnimateOnScroll();
  const { ref: ref3, isVisible: isVisible3 } = useAnimateOnScroll();
  
  return (
    <div className="space-y-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gradient-blue">About FairCampus</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn about our mission to create safer, more inclusive educational environments.
        </p>
      </div>
      
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold">Our Mission</h2>
        <Card className="glass-card">
          <CardContent className="p-6">
            <p className="text-lg mb-4">
              FairCampus was created with a simple but powerful mission: to provide students with a safe platform to report grievances, track their resolution, and access resources to help them navigate difficult situations on campus.
            </p>
            <p className="text-muted-foreground">
              Whether dealing with ragging, discrimination, unfair treatment, or issues with internships, scholarships and grading, we believe every student deserves to be heard and supported. By combining AI assistance with practical resources and community stories, we aim to empower students to speak up and create positive change in educational institutions.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold">How We Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">Anonymous Reporting</h3>
              <p className="text-muted-foreground">
                Report issues without revealing your identity, helping those who fear retaliation to still speak up.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">AI Assistant</h3>
              <p className="text-muted-foreground">
                Get guidance and support through our AI assistant that can answer questions and provide resources.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">Community Stories</h3>
              <p className="text-muted-foreground">
                Learn from the experiences of others who have faced similar situations and found resolution.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">Location Mapping</h3>
              <p className="text-muted-foreground">
                Identify incident locations and find nearby support resources through our interactive map.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">Ticket Tracking</h3>
              <p className="text-muted-foreground">
                Monitor the status of your reported issues and see progress toward resolution.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">Resource Directory</h3>
              <p className="text-muted-foreground">
                Access helpline numbers, legal information, and support services to assist with your specific situation.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
      
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold">Privacy Commitment</h2>
        <Card className="glass-card">
          <CardContent className="p-6">
            <p className="text-lg mb-4">
              FairCampus is designed with privacy at its core. All data is stored locally in your browser's storage, and nothing is sent to external servers.
            </p>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Local Storage Only:</strong> Your personal information, reports, and chat history remain on your device.
              </p>
              <p>
                <strong>Anonymous Reporting:</strong> You can choose to submit reports anonymously, further protecting your identity.
              </p>
              <p>
                <strong>No Tracking:</strong> We don't use analytics or tracking tools that could compromise your privacy.
              </p>
              <p>
                <strong>Self-Contained:</strong> As a front-end only application, there's no backend server collecting or storing your data.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default About;
