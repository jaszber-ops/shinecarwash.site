/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { Packages } from './components/Packages';
import { BookingForm } from './components/BookingForm';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-obsidian text-white selection:bg-electric selection:text-obsidian">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      <main>
        <Hero />
        <LogoMarquee />
        <Location />
        <Packages />
        <BookingForm />
        <Testimonials />
      </main>
      <Footer />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}
