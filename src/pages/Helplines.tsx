
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/utils/useAnimateOnScroll';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ExternalLink, PhoneCall, FileText, Scale } from 'lucide-react';

const Helplines = () => {
  const { ref, isVisible } = useAnimateOnScroll();
  
  const emergencyHelplines = [
    {
      name: 'UGC Anti-Ragging Helpline',
      number: '1800-180-5522',
      description: 'Toll-free helpline for reporting ragging incidents in educational institutions.',
      link: 'https://www.ugc.ac.in/page/Ragging-Related-Circulars.aspx'
    },
    {
      name: 'National Commission for SC/ST',
      number: '1800-180-7009',
      description: 'For reporting discrimination against Scheduled Castes and Scheduled Tribes.',
      link: 'https://ncsc.nic.in/pages/view/charter-of-the-commission'
    },
    {
      name: 'KIRAN Mental Health Helpline',
      number: '1800-599-0019',
      description: '24/7 toll-free helpline providing support for mental health and related issues.',
      link: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2020/sep/doc202091401.pdf'
    },
    {
      name: 'National Legal Aid Services',
      number: '1516',
      description: 'Free legal services for eligible students and citizens.',
      link: 'https://nalsa.gov.in/services/legal-aid/legal-services'
    }
  ];
  
  const legalResources = [
    {
      title: 'UGC Anti-Ragging 3rd Amendment',
      description: 'Latest amendment to the UGC Anti-Ragging regulations with updated guidelines.',
      link: 'https://www.ugc.gov.in/pdfnews/7823260_Anti-Ragging-3rd-Amendment.pdf'
    },
    {
      title: 'POSH Compliance Guide',
      description: 'The ultimate guide to Prevention of Sexual Harassment (POSH) compliance in educational institutions.',
      link: 'https://elearnposh.com/the-ultimate-guide-to-posh-compliance'
    },
    {
      title: 'SC/ST Prevention of Atrocities Act',
      description: 'Legal framework for preventing atrocities against members of Scheduled Castes and Scheduled Tribes.',
      link: 'https://socialjustice.gov.in/writereaddata/UploadFile/PCRAct2018.pdf'
    },
    {
      title: 'Right to Education Act',
      description: 'Legislation ensuring free and compulsory education for children between 6-14 years.',
      link: 'https://legislative.gov.in/sites/default/files/The%20Right%20to%20Education%20Act%2C%202009.pdf'
    }
  ];
  
  const landmarkCases = [
    {
      title: 'Vishaka vs State of Rajasthan',
      description: 'Guidelines to address sexual harassment in educational institutions and workplaces.',
      link: 'https://main.sci.gov.in/judgment/judis/13856.pdf'
    },
    {
      title: 'Mohini Jain vs State of Karnataka',
      description: 'Landmark case establishing education as a fundamental right and addressing capitation fees.',
      link: 'https://main.sci.gov.in/judgment/judis/7250.pdf'
    },
    {
      title: 'University of Kerala vs Council of Principals',
      description: 'Supreme Court guidelines for preventing ragging in educational institutions.',
      link: 'https://www.ugc.ac.in/pdfnews/9541841_ragging.pdf'
    }
  ];
  
  return (
    <div className="space-y-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gradient-blue">Helplines & Resources</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Access emergency contacts, legal resources, and support services to address your concerns effectively.
        </p>
      </div>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-2xl font-bold flex items-center gap-2"><PhoneCall size={24} className="text-uranian_blue-400" /> Emergency Helplines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {emergencyHelplines.map((helpline, index) => (
            <Card key={index} className="glass-card hover-lift hover-glow">
              <CardHeader>
                <CardTitle className="text-xl text-uranian_blue-400">{helpline.name}</CardTitle>
                <CardDescription>
                  <a 
                    href={`tel:${helpline.number.replace(/-/g, '')}`}
                    className="text-lg font-bold text-uranian_blue hover:underline"
                  >
                    {helpline.number}
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">{helpline.description}</p>
                <a 
                  href={helpline.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-uranian_blue hover:underline inline-flex items-center gap-1 text-sm"
                >
                  Visit official website <ExternalLink size={12} />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-8"
      >
        <h2 className="text-2xl font-bold flex items-center gap-2"><FileText size={24} className="text-uranian_blue-400" /> Legal Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {legalResources.map((resource, index) => (
            <Card key={index} className="glass-card hover-lift hover-glow">
              <CardHeader>
                <CardTitle className="text-uranian_blue-400">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">{resource.description}</p>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-uranian_blue hover:underline inline-flex items-center gap-1 text-sm"
                >
                  Download PDF <ExternalLink size={12} />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-8"
      >
        <h2 className="text-2xl font-bold flex items-center gap-2"><Scale size={24} className="text-uranian_blue-400" /> Landmark Legal Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {landmarkCases.map((resource, index) => (
            <Card key={index} className="glass-card hover-lift hover-glow">
              <CardHeader>
                <CardTitle className="text-uranian_blue-400">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">{resource.description}</p>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-uranian_blue hover:underline inline-flex items-center gap-1 text-sm"
                >
                  View judgment <ExternalLink size={12} />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <div className="p-6 bg-uranian_blue-100/20 rounded-lg max-w-3xl mx-auto glass-card">
          <h3 className="text-xl font-bold mb-4 text-uranian_blue-400">Need More Support?</h3>
          <p className="text-muted-foreground mb-4">
            If you're facing an emergency situation or need immediate assistance, please contact any of the helplines above or use our AI assistant to get personalized guidance.
          </p>
          <Link to="/services" className="text-uranian_blue hover:underline">
            Report an incident through our platform
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Helplines;
