import React from 'react';
import { cn } from "@/lib/utils";
import { Marquee as MarqueeComponent } from "@/components/ui/Marquee";

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
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export const ReviewCard = ({ img, name, username, body }) => {
  return (
    <div 
      className="bg-white/20 backdrop-blur-2xl border border-white/30 
                 rounded-xl p-4 m-2 w-64 shadow-2xl 
                 transition-all duration-300 
                 hover:bg-white/30 hover:shadow-3xl 
                 text-white space-y-3"
    >
      <div className="flex items-center space-x-3 mb-2">
        <img 
          src={img} 
          alt={name} 
          className="w-10 h-10 rounded-full border-2 border-white/50"
        />
        <div>
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-xs opacity-75">{username}</p>
        </div>
      </div>
      <p className="text-sm opacity-90">{body}</p>
    </div>
  );
};

export function MarqueeDemo({ pauseOnHover, children }) {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black md:shadow-xl">
      <MarqueeComponent pauseOnHover={pauseOnHover} className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </MarqueeComponent>
      <MarqueeComponent reverse pauseOnHover={pauseOnHover} className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </MarqueeComponent>
    </div>
  );
}