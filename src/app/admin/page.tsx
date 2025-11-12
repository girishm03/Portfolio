"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, Trash2 } from 'lucide-react';
import { usePortfolioStore } from '@/lib/portfolio-store';
import { defaultProjects, defaultEducation, defaultSkills, defaultSocialLinks } from '@/lib/data';

const defaultData = {
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
  },
  projects: defaultProjects,
  education: defaultEducation,
  skills: defaultSkills,
  socials: defaultSocialLinks,
};


export default function AdminPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { data: portfolioData, setData, isInitialized } = usePortfolioStore();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setLocalData] = useState(portfolioData);


  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (!isAdmin) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
      if (isInitialized) {
        setLocalData(portfolioData);
      }
    }
  }, [router, isInitialized, portfolioData]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    router.push('/');
  };

  const handleInputChange = (section: string, field: string, value: any) => {
    setLocalData(prevData => ({
      ...prevData,
      [section]: {
        ...(prevData as any)[section],
        [field]: value,
      },
    }));
  };

  const handleListItemChange = (section: 'skills' | 'projects' | 'education' | 'socials', index: number, field: string, value: any) => {
    setLocalData(prevData => {
        const list = [...(prevData[section] as any[])];
        list[index] = { ...list[index], [field]: value };
        return { ...prevData, [section]: list };
    });
  };

  const addListItem = (section: 'skills' | 'projects' | 'education' | 'socials') => {
      setLocalData(prevData => {
          const list = [...(prevData[section] as any[])];
          const newItem = section === 'skills' ? { name: '', level: 50, iconName: '' } :
                          section === 'projects' ? { title: '', description: '', technologies: '', githubUrl: '' } :
                          section === 'education' ? { degree: '', institution: '', year: '', description: '' } :
                          { label: '', href: '', iconName: 'Link' };
          return { ...prevData, [section]: [...list, newItem] };
      });
  };

  const removeListItem = (section: 'skills' | 'projects' | 'education' | 'socials', index: number) => {
      setLocalData(prevData => {
          const list = [...(prevData[section] as any[])];
          list.splice(index, 1);
          return { ...prevData, [section]: list };
      });
  };

  const handleFileChange = (section: string, field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleInputChange(section, field, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setData(data);
    toast({
      title: 'Content Saved!',
      description: 'Your portfolio has been updated.',
    });
  };
  
  const handleReset = () => {
    setLocalData(defaultData);
    setData(defaultData);
    toast({
      title: 'Content Reset!',
      description: 'Your portfolio has been reset to the default content.',
    });
  };

  if (!isAuthenticated || !isInitialized) {
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
                <Label htmlFor="about-resume">Resume (PDF)</Label>
                <Input
                  id="about-resume"
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileChange('about', 'resumeUrl', e)}
                />
                {data.about.resumeUrl && <a href={data.about.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline mt-2 inline-block">View Current Resume</a>}
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
                <Label htmlFor="image-profile">Profile Picture</Label>
                <Input
                  id="image-profile"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange('images', 'profile', e)}
                />
              </div>
               <div>
                <Label htmlFor="image-hero-bg">Hero Background</Label>
                <Input
                  id="image-hero-bg"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange('images', 'heroBg', e)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
                <CardTitle>Social Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {data.socials.map((social, index) => (
                    <div key={index} className="flex items-end gap-2 border p-2 rounded-md">
                        <div className="flex-1 grid grid-cols-3 gap-2">
                            <Input value={social.label} onChange={(e) => handleListItemChange('socials', index, 'label', e.target.value)} placeholder="Label (e.g. LinkedIn)"/>
                            <Input value={social.href} onChange={(e) => handleListItemChange('socials', index, 'href', e.target.value)} placeholder="URL"/>
                            <Input value={social.iconName} onChange={(e) => handleListItemChange('socials', index, 'iconName', e.target.value)} placeholder="Icon Name (e.g. Linkedin)"/>
                        </div>
                        <Button variant="destructive" size="icon" onClick={() => removeListItem('socials', index)}><Trash2 /></Button>
                    </div>
                ))}
                <Button variant="outline" onClick={() => addListItem('socials')}>Add Social Link</Button>
                 <CardDescription>Icon names from lucide-react: Github, Linkedin, Instagram, Twitter, MessageSquare</CardDescription>
            </CardContent>
          </Card>

           <Card>
                <CardHeader><CardTitle>Skills</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    {data.skills.map((skill, index) => (
                         <div key={index} className="flex items-end gap-2 border p-2 rounded-md">
                            <div className="flex-1 grid grid-cols-3 gap-2">
                                <Input value={skill.name} onChange={(e) => handleListItemChange('skills', index, 'name', e.target.value)} placeholder="Skill Name"/>
                                <Input type="number" value={skill.level} onChange={(e) => handleListItemChange('skills', index, 'level', parseInt(e.target.value))} placeholder="Level (1-100)"/>
                                <Input value={skill.iconName} onChange={(e) => handleListItemChange('skills', index, 'iconName', e.target.value)} placeholder="Icon Name"/>
                            </div>
                            <Button variant="destructive" size="icon" onClick={() => removeListItem('skills', index)}><Trash2/></Button>
                        </div>
                    ))}
                    <Button variant="outline" onClick={() => addListItem('skills')}>Add Skill</Button>
                    <CardDescription>Icon names: PythonIcon, DjangoIcon, FlaskIcon, ReactIcon</CardDescription>
                </CardContent>
            </Card>

            <Card>
                <CardHeader><CardTitle>Education</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    {data.education.map((edu, index) => (
                        <div key={index} className="space-y-2 border p-2 rounded-md relative">
                            <Input value={edu.degree} onChange={(e) => handleListItemChange('education', index, 'degree', e.target.value)} placeholder="Degree"/>
                            <Input value={edu.institution} onChange={(e) => handleListItemChange('education', index, 'institution', e.target.value)} placeholder="Institution"/>
                            <Input value={edu.year} onChange={(e) => handleListItemChange('education', index, 'year', e.target.value)} placeholder="Year"/>
                            <Textarea value={edu.description} onChange={(e) => handleListItemChange('education', index, 'description', e.target.value)} placeholder="Description"/>
                            <Button className="absolute top-2 right-2" variant="destructive" size="icon" onClick={() => removeListItem('education', index)}><Trash2/></Button>
                        </div>
                    ))}
                    <Button variant="outline" onClick={() => addListItem('education')}>Add Education</Button>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader><CardTitle>Projects</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    {data.projects.map((proj, index) => (
                        <div key={index} className="space-y-2 border p-2 rounded-md relative">
                            <Input value={proj.title} onChange={(e) => handleListItemChange('projects', index, 'title', e.target.value)} placeholder="Project Title"/>
                            <Textarea value={proj.description} onChange={(e) => handleListItemChange('projects', index, 'description', e.target.value)} placeholder="Description"/>
                            <Input value={proj.technologies} onChange={(e) => handleListItemChange('projects', index, 'technologies', e.target.value)} placeholder="Technologies (comma separated)"/>
                            <Input value={proj.githubUrl} onChange={(e) => handleListItemChange('projects', index, 'githubUrl', e.target.value)} placeholder="GitHub URL"/>
                            <Button className="absolute top-2 right-2" variant="destructive" size="icon" onClick={() => removeListItem('projects', index)}><Trash2/></Button>
                        </div>
                    ))}
                    <Button variant="outline" onClick={() => addListItem('projects')}>Add Project</Button>
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
