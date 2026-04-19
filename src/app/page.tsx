"use client";

import Link from "next/link";
import { Dithering } from "@paper-design/shaders-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden flex">
      <div className="w-1/2 p-8 font-mono relative z-10 bg-black text-white">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-lg font-normal mb-8">ojflabs</h1>
          <div className="mb-8">
            <h2 className="text-lg font-normal">OLIVER FITZGERALD</h2>
            <h3 className="text-lg font-normal">INDEPENDENT STUDIO</h3>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-12 space-y-1">
          <div className="flex">
            <Link href="/apps/olive" className="w-20 hover:underline">Olive</Link>
            <span className="mx-2">Bible</span>
            <span className="mx-4">2026</span>
          </div>
          <div className="flex">
            <span className="w-20">Yenga</span>
            <span className="mx-2">Flashcards</span>
            <span className="mx-4">2026</span>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="absolute bottom-8 left-8">
          <div className="flex space-x-4 text-lg font-mono">
            <span>Links</span>
            <a href="https://github.com/fitzies" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:olifitz1610@gmail.com">Email</a>
          </div>
        </div>
      </div>

      <div className="w-1/2 relative">
        <Dithering
          style={{ height: "100%", width: "100%" }}
          colorBack="hsl(0, 0%, 0%)"
          colorFront="hsl(80, 45%, 55%)"
          shape="dots"
          type="4x4"
          pxSize={3}
          offsetX={0}
          offsetY={0}
          scale={0.8}
          rotation={0}
          speed={0.1}
        />
      </div>
    </div>
  );
}
