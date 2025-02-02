"use client";

import React, { useState, useEffect } from 'react'
import { NavbarDemo as Nav } from '../components/nav'
// import {WavyBackgroundDemo as Bg} from '../components/bg'
import {Timeline} from '../components/ui/timeline'
import {WobbleCardDemo as Card} from '../components/Card'
import {TextRevealCardPreview as Drag} from '../components/Drag'
import { TextGenerateEffectDemo } from "../components/Text";
import { Footer } from '../components/Footer';
import { LampDemo } from '../components/bg';    

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <LampDemo />
      <Nav />
      <Timeline />
      <Card />
      <Drag />
      <TextGenerateEffectDemo />
      <Footer />
    </div>
  )
}

export default Page;