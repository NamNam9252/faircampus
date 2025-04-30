
import ReportForm from '@/components/services/ReportForm';
import TicketTracker from '@/components/services/TicketTracker';

const Services = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gradient">Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Report issues, track tickets, and get support for your concerns. We're here to help you navigate difficult situations.
        </p>
      </div>
      
      <ReportForm />
      <TicketTracker />
    </div>
  );
};

export default Services;
