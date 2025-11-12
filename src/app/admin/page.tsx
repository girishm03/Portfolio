"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut } from 'lucide-react';

// This is a mock data store. In a real application, you'd fetch this from a database.
const initialPortfolioData = {
  hero: {
    name: 'Girish M',
    title: 'Python Developer',
  },
  about: {
    description1: "As a dedicated Python developer with over 5 years of experience, I specialize in crafting high-performance backend systems and scalable web applications. My journey in software development began with a fascination for automation, which quickly evolved into a passion for building solutions that are not only functional but also elegant and efficient.",
    description2: "I thrive on challenges and am constantly exploring new technologies to enhance my skill set. When I'm not coding, you can find me contributing to open-source projects, exploring hiking trails, or diving into a good science fiction novel.",
    resumeUrl: '/resume.pdf',
    email: 'girishmadhu03@gmail.com',
    phone: '+91 1234567890',
    dob: 'Jan 1, 2000',
    location: 'Your City, Your Country',
  },
  images: {
    profile: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NjI4NjA5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    heroBg: 'https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGFyayUyMGNvZGV8ZW58MHx8fHwxNzYyODQ4ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  }
};


export default function AdminPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState(initialPortfolioData);

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (!isAdmin) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
      // In a real app, load data from localStorage or a DB
      const savedData = localStorage.getItem('portfolioData');
      if (savedData) {
        setData(JSON.parse(savedData));
      }
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    router.push('/');
  };

  const handleInputChange = (section: string, field: string, value: string) => {
    setData(prevData => ({
      ...prevData,
      [section]: {
        ...(prevData as any)[section],
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    // In a real app, you'd save this to a database.
    // For this prototype, we'll use localStorage.
    localStorage.setItem('portfolioData', JSON.stringify(data));
    toast({
      title: 'Content Saved!',
      description: 'Your portfolio has been updated.',
    });
  };
  
  const handleReset = () => {
    setData(initialPortfolioData);
    localStorage.removeItem('portfolioData');
    toast({
      title: 'Content Reset!',
      description: 'Your portfolio has been reset to the default content.',
    });
  };

  if (!isAuthenticated) {
    return null; // Or a loading spinner
  }

  return (
    <div className="min-h-screen bg-muted/40">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" size="icon" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
        </div>
      </header>
      <main className="container py-8">
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="hero-name">Name</Label>
                <Input
                  id="hero-name"
                  value={data.hero.name}
                  onChange={(e) => handleInputChange('hero', 'name', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="hero-title">Title (for typing animation)</Label>
                <Input
                  id="hero-title"
                  value={data.hero.title}
                  onChange={(e) => handleInputChange('hero', 'title', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="about-desc1">Description Paragraph 1</Label>
                <Textarea
                  id="about-desc1"
                  value={data.about.description1}
                  onChange={(e) => handleInputChange('about', 'description1', e.target.value)}
                  rows={5}
                />
              </div>
              <div>
                <Label htmlFor="about-desc2">Description Paragraph 2</Label>
                <Textarea
                  id="about-desc2"
                  value={data.about.description2}
                  onChange={(e) => handleInputChange('about', 'description2', e.target.value)}
                  rows={5}
                />
              </div>
              <div>
                <Label htmlFor="about-resume">Resume URL</Label>
                <Input
                  id="about-resume"
                  value={data.about.resumeUrl}
                  onChange={(e) => handleInputChange('about', 'resumeUrl', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <Label htmlFor="about-email">Email</Label>
                    <Input id="about-email" value={data.about.email} onChange={(e) => handleInputChange('about', 'email', e.target.value)} />
                </div>
                <div>
                    <Label htmlFor="about-phone">Phone</Label>
                    <Input id="about-phone" value={data.about.phone} onChange={(e) => handleInputChange('about', 'phone', e.target.value)} />
                </div>
                <div>
                    <Label htmlFor="about-dob">Date of Birth</Label>
                    <Input id="about-dob" value={data.about.dob} onChange={(e) => handleInputChange('about', 'dob', e.target.value)} />
                </div>
                <div>
                    <Label htmlFor="about-location">Location</Label>
                    <Input id="about-location" value={data.about.location} onChange={(e) => handleInputChange('about', 'location', e.target.value)} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Images</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="image-profile">Profile Picture URL</Label>
                <Input
                  id="image-profile"
                  value={data.images.profile}
                  onChange={(e) => handleInputChange('images', 'profile', e.target.value)}
                />
              </div>
               <div>
                <Label htmlFor="image-hero-bg">Hero Background URL</Label>
                <Input
                  id="image-hero-bg"
                  value={data.images.heroBg}
                  onChange={(e) => handleInputChange('images', 'heroBg', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={handleReset}>Reset to Default</Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
