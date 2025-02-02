"use client";

import React, { useState, useEffect } from 'react'
import { NavbarDemo as Nav } from '../components/nav'
// import {WavyBackgroundDemo as Bg} from '../components/bg'
import {Timeline} from '../components/ui/timeline'
import {WobbleCardDemo as Card} from '../components/Card'
import {TextRevealCardPreview as Drag} from '../components/Drag'
import { TextGenerateEffectDemo } from "../components/Text";
import { Footer } from '../components/Footer';
import { MarqueeDemo, ReviewCard } from '../components/Marquee';
import { LampDemo } from '../components/ui/lamp';    
import { AnimatedBeamDemo as Beam } from "../components/Beam";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    }
  ];

  return (
    <div>
      <LampDemo />
      <Nav />
      <Timeline />
      <Card />
      <Drag />
      <TextGenerateEffectDemo />
      {isClient && (
        <>
          <Beam />
        </>
      )}
      <div className=" py-10">
        <MarqueeDemo pauseOnHover>
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </MarqueeDemo>
      </div>
      <Footer />
    </div>
  )
}

export default Page;