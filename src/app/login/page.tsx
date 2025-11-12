
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Shield } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [command, setCommand] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (command === '/gamemode creative') {
      localStorage.setItem('isAdmin', 'true');
      toast({
        title: 'Login Successful',
        description: 'Redirecting to admin dashboard...',
      });
      router.push('/admin');
    } else {
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: 'Invalid command.',
      });
      setCommand('');
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background">
       <Button variant="outline" size="icon" className="absolute top-4 right-4" asChild>
            <Link href="/">
                <ArrowLeft />
                <span className="sr-only">Back to homepage</span>
            </Link>
        </Button>
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
          <CardDescription>Enter the secret command to unlock the dashboard.</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent>
            <Input
              type="password"
              placeholder=">_"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              className="font-mono text-center"
              autoFocus
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Execute
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
