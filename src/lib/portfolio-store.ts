"use client";

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

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
  }
};

type PortfolioData = typeof defaultData;

type PortfolioState = {
  data: PortfolioData;
  isInitialized: boolean;
};

// This is a zustand store that persists to localStorage.
// It will be used to hold the portfolio data and allow it to be edited in the admin dashboard.
export const usePortfolioStore = create<PortfolioState>()(
  persist(
    (set) => ({
      data: defaultData,
      isInitialized: false,
    }),
    {
      name: 'portfolio-data-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
       onRehydrateStorage: () => (state) => {
        if (state) {
          state.isInitialized = true;
        }
      },
    }
  )
)
