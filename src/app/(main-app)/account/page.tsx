"use client"

import dynamic from "next/dynamic";

import * as animationData from '~/assets/lottie/Giftbox.json'

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function AccountPage() {
  return (
    <div className="bg-zinc-950 h-screen">
      <Lottie animationData={animationData} className="w-10 h-10" />
    </div>
  );
}
