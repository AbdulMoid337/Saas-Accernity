"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `Oxygen gets you high. frfrrgr grregrgg gergerggrrgg In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

export function TextGenerateEffectDemo() {
  return (
    <div className="w-full h-[20rem] flex  items-center justify-center bg-neutral-950 px-4">
      <div className="max-w-4xl ">
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
}
