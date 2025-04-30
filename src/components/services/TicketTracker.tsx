
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/utils/useAnimateOnScroll';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Ticket, getTickets, getUser } from '@/utils/localStorage';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { format, parseISO } from 'date-fns';

const TicketTracker = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const { ref, isVisible } = useAnimateOnScroll();
  const user = getUser();
  
  useEffect(() => {
    const fetchedTickets = getTickets();
    let filteredTickets = fetchedTickets;
    
    // Filter tickets by current user if logged in
    if (user) {
      filteredTickets = fetchedTickets.filter(ticket => 
        ticket.userId === user.id || ticket.anonymous === false
      );
    } else {
      // If no user logged in, show only non-anonymous tickets
      filteredTickets = fetchedTickets.filter(ticket => !ticket.anonymous);
    }
    
    // Sort by date, newest first
    filteredTickets.sort((a, b) => 
      new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
    );
    
    setTickets(filteredTickets);
  }, [user]);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-blue-500';
      case 'In Review':
        return 'bg-yellow-500';
      case 'Resolved':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

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
      transition={{ duration: 0.5 }}
      className="w-full mt-8"
    >
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Ticket Tracker</CardTitle>
          <CardDescription>
            Track the status of your reported issues
          </CardDescription>
        </CardHeader>
        <CardContent>
          {tickets.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Issue Type</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Date Submitted</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Updated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-mono">{ticket.id}</TableCell>
                      <TableCell className="capitalize">{ticket.type}</TableCell>
                      <TableCell>{ticket.title}</TableCell>
                      <TableCell>{formatDate(ticket.date)}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`${getStatusColor(ticket.status)} text-white`}>
                          {ticket.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{formatDate(ticket.lastUpdated)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>No tickets found. Submit an issue to see it here.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TicketTracker;
