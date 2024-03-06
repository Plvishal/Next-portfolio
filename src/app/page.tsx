'use client';

import Image from 'next/image';

import About from '@/components/About';
import Resume from '../components/Resume';
import Projects from '@/components/Projects';
import ContactUs from '@/components/ContactUs';
import Heroection from '@/components/Heroection';

export default function Home() {
  return (
    <>
      <div className="h-screen w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center text-white">
        <Heroection />
      </div>
      <About />
      <Resume />
      <Projects />
      <ContactUs />
    </>
  );
}
