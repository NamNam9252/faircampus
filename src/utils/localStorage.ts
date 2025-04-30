
// User Type
export interface User {
  id: string;
  name: string;
  avatar: string;
}

// Ticket Type
export interface Ticket {
  id: string;
  userId: string;
  type: string;
  title: string;
  description: string;
  date: string;
  location?: {
    lat: number;
    lng: number;
  };
  status: 'Open' | 'In Review' | 'Resolved';
  anonymous: boolean;
  lastUpdated: string;
}

// Story Type
export interface Story {
  id: string;
  author: string;
  title: string;
  content: string;
  date: string;
  anonymous: boolean;
}

// Chat Message Type
export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

// User Management
export const getUser = (): User | null => {
  const userData = localStorage.getItem('fairCampus_user');
  return userData ? JSON.parse(userData) : null;
};

export const saveUser = (user: User): void => {
  localStorage.setItem('fairCampus_user', JSON.stringify(user));
};

export const removeUser = (): void => {
  localStorage.removeItem('fairCampus_user');
};

// Ticket Management
export const getTickets = (): Ticket[] => {
  const ticketData = localStorage.getItem('fairCampus_tickets');
  return ticketData ? JSON.parse(ticketData) : [];
};

export const saveTicket = (ticket: Ticket): void => {
  const tickets = getTickets();
  tickets.push(ticket);
  localStorage.setItem('fairCampus_tickets', JSON.stringify(tickets));
};

export const updateTicket = (updatedTicket: Ticket): void => {
  const tickets = getTickets();
  const index = tickets.findIndex((ticket) => ticket.id === updatedTicket.id);
  
  if (index !== -1) {
    tickets[index] = updatedTicket;
    localStorage.setItem('fairCampus_tickets', JSON.stringify(tickets));
  }
};

// Story Management
export const getStories = (): Story[] => {
  const storyData = localStorage.getItem('fairCampus_stories');
  return storyData ? JSON.parse(storyData) : [];
};

export const saveStory = (story: Story): void => {
  const stories = getStories();
  stories.push(story);
  localStorage.setItem('fairCampus_stories', JSON.stringify(stories));
};

// Chat Management
export const getChatMessages = (): ChatMessage[] => {
  const chatData = localStorage.getItem('fairCampus_chat');
  return chatData ? JSON.parse(chatData) : [];
};

export const saveChatMessage = (message: ChatMessage): void => {
  const messages = getChatMessages();
  messages.push(message);
  localStorage.setItem('fairCampus_chat', JSON.stringify(messages));
};

// Helper functions
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};

// Some default data for the platform
export const initializeDefaultData = (): void => {
  // Add default stories if none exist
  if (getStories().length === 0) {
    const defaultStories: Story[] = [
      {
        id: '1',
        author: 'System',
        title: 'Sidharthan Case (2024)',
        content: 'Sidharthan (20) was a veterinary student who was found dead after alleged severe ragging by seniors. The incident led to police action against the accused seniors and sparked protests across Kerala demanding justice.',
        date: '2024-02-20',
        anonymous: false,
      },
      {
        id: '2',
        author: 'System',
        title: 'Arun Menon Case (2023)',
        content: 'Arun Menon faced caste-based discrimination at a prestigious engineering college. After multiple ignored complaints, he filed a case with the SC/ST commission which led to institutional changes in the college\'s policies.',
        date: '2023-11-15',
        anonymous: false,
      },
      {
        id: '3',
        author: 'System',
        title: 'Mohini Jain v. Karnataka (1992)',
        content: 'This landmark Supreme Court case recognized education as a fundamental right. The Court struck down exorbitant capitation fees charged by private colleges, making education more accessible to students from all economic backgrounds.',
        date: '1992-06-30',
        anonymous: false,
      },
    ];
    
    localStorage.setItem('fairCampus_stories', JSON.stringify(defaultStories));
  }
};
