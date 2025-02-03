"use client"


import Lottie from 'react-lottie';
import * as animationData from './Animation - 1738601556616.json'
import { useState } from 'react';

export const PresentSmallLottie = () => {
    const [isStopped, setIsStopped] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div>
      <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={isStopped}
              isPaused={isPaused}
              />
      <button onClick={() => setIsStopped(true)}>stop</button>
      <button onClick={() => setIsStopped(false)}>play</button>
      <button onClick={() => setIsPaused(!isPaused)}>pause</button>
    </div>
  )
}
