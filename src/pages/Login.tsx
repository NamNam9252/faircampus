import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/components/ui/use-toast';
import { generateId, getUser, removeUser, saveUser } from '@/utils/localStorage';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const currentUser = getUser();

  const [formData, setFormData] = useState({
    name: '',
    avatar: '',
  });
  
  const [previewURL, setPreviewURL] = useState('');
  
  const avatarSuggestions = [
    "https://wallpapers.com/images/high/anime-profile-picture-jioug7q8n43yhlwn.jpg",
    "https://www.inspireuplift.com/resizer/?image=https://cdn.inspireuplift.com/uploads/images/seller_products/62680/1710720293_Capture.PNG&width=600&height=600&quality=90&format=auto&fit=pad",
    "https://i.pinimg.com/736x/28/c5/54/28c55499f5401efd54ff75339bc63331.jpg",
    "https://media.craiyon.com/2023-10-14/6d927b320d67443cad1d337890918109.webp"
  ];

  useEffect(() => {
    // If user is already logged in, fill the form with their info
    if (currentUser) {
      setFormData({
        name: currentUser.name,
        avatar: currentUser.avatar,
      });
      setPreviewURL(currentUser.avatar);
    }
  }, [currentUser]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Update preview if it's the avatar URL
    if (name === 'avatar') {
      setPreviewURL(value);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onloadend = () => {
        const result = reader.result as string;
        setFormData(prev => ({ ...prev, avatar: result }));
        setPreviewURL(result);
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name) {
      toast({
        title: "Name Required",
        description: "Please enter your name to continue.",
        variant: "destructive",
      });
      return;
    }
    
    const user = {
      id: currentUser?.id || generateId(),
      name: formData.name,
      avatar: formData.avatar,
    };
    
    saveUser(user);
    
    toast({
      title: currentUser ? "Profile Updated" : "Welcome to FairCampus!",
      description: currentUser ? "Your profile has been updated successfully." : "Your account has been created successfully.",
    });
    
    navigate('/');
    window.location.reload();
  };

  const handleLogout = () => {
    removeUser();
    
    setFormData({
      name: '',
      avatar: '',
    });
    setPreviewURL('');
    
    toast({
      title: "Logged Out",
      description: "You have been logged out of your account.",
    });
    
    window.location.reload();
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="glass-card">
          <CardHeader className="text-center">
            <CardTitle>
              {currentUser 
                ? `Welcome ${currentUser.name} 👋`
                : 'Create Your Profile'}
            </CardTitle>
            <CardDescription>
              {currentUser
                ? 'Edit your profile information below'
                : 'Create a profile to report issues and share stories'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center mb-6">
                <Avatar className="w-24 h-24">
                  {previewURL ? (
                    <AvatarImage src={previewURL} alt="Avatar preview" />
                  ) : (
                    <AvatarFallback className="text-3xl">
                      {formData.name ? getInitials(formData.name) : 'FC'}
                    </AvatarFallback>
                  )}
                </Avatar>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="avatar-url">Avatar URL (Optional)</Label>
                <Input 
                  id="avatar-url" 
                  name="avatar"
                  value={typeof formData.avatar === 'string' && !formData.avatar.startsWith('data:') ? formData.avatar : ''}
                  onChange={handleInputChange}
                  placeholder="Enter image URL"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="avatar-file">Or Upload Avatar Image</Label>
                <Input 
                  id="avatar-file" 
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </div>

              <div className="space-y-2">
                <Label>Or Choose a Suggested Avatar</Label>
                <div className="flex gap-3 flex-wrap">
                  {avatarSuggestions.map((url) => (
                    <button
                      type="button"
                      key={url}
                      className={`rounded-full border-2 ${formData.avatar === url ? 'border-primary' : 'border-transparent'} focus:outline-none`}
                      onClick={() => {
                        setFormData(prev => ({ ...prev, avatar: url }));
                        setPreviewURL(url);
                      }}
                      aria-label="Select avatar"
                    >
                      <img src={url} alt="Suggested avatar" className="w-14 h-14 rounded-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground">
                Note: All data is stored locally in your browser. No information is sent to a server.
              </p>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between flex-wrap gap-2">
            {currentUser && (
              <Button variant="destructive" onClick={handleLogout}>
                Logout
              </Button>
            )}
            <Button type="submit" onClick={handleSubmit} className="ml-auto">
              {currentUser ? 'Update Profile' : 'Create Profile'}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
