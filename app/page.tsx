"use client";

import { useState } from "react";
import Gallery from "@/components/ui/Gallery/gallery";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlusIcon, MinusIcon, PegiIcon, TvIcon, TabletopIcon, HandheldIcon } from "@/components/ui/icons";
import Link from "next/link";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const text = `You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!

  Now with Multiplayer! Invite 1-3 players to join you in the valley! Players can work together to build a thriving farm, share resources, and build relationships with townspeople or each other. As more hands are better than one, players have the option to scale profit margin on produce sold for a more challenging experience.`;

  return (
    <>
      <Gallery></Gallery>
      <div className="w-24/25 max-w-6xl m-auto py-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 pt-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">You're moving to the valley...</h3>
            <div>
              <p>{isExpanded ? text.split('\n').map((str, index) => <span key={index}>{str}<br /></span>) : `${text.substring(0, 565)}...`}</p>
              <Button variant={"outline"} className="p-0 pt-2" onClick={toggleReadMore}>
                {isExpanded ? <MinusIcon className="w-4.5 h-4.5" /> : <PlusIcon className="w-4.5 h-4.5" />}
                {isExpanded ? "show less" : "read more"}
              </Button>
            </div>
            <span className="text-xs">Software description provided by the publisher.</span>
            <Button className="md:w-fit" size={"sm"}>Explore this game's official website</Button>
          </div>
          <Image
            className="w-full h-fit rounded-xl object-contain max-h-96"
            src="/games/stardew_valley/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7.avif"
            alt="Stardew Valley"
            width={500}
            height={500}
          />
        </div>
        <div className="pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center justify-center py-6 px-8 rounded-2xl bg-secondary-background gap-4">
              <p className="font-bold text-base">ESRB rating</p>
              <Link href={"/"} className="flex text-xs gap-3 items-center bg-background p-2 rounded-xl py-4 px-8 mb-8">
                <PegiIcon className="min-h-16 min-w-11" />
                <div className="flex flex-col gap-0.75">
                  <p>
                    Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated
                    Gambling, Mild Language, Mild Blood
                  </p>
                  <hr className="text-detail" />
                  <p>Users interact</p>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center py-6 px-8 rounded-2xl bg-secondary-background gap-4">
              <p className="font-bold text-base">Supported play modes</p>
              <div className="grid grid-cols-3 w-full bg-background p-2 rounded-xl py-4 px-8 gap-6">
                <div>
                  <div className="flex items-center justify-center p-4 shadow-md rounded-xl bg-bg-dark text-secondary-foreground">
                    <TvIcon className="w-12 object-contain" />
                  </div>
                  <p className="text-xs font-bold text-center my-4">TV</p>
                </div>
                <div>
                  <div className="flex items-center justify-center p-4 shadow-md rounded-xl bg-bg-dark text-secondary-foreground">
                    <TabletopIcon className="w-12 object-contain" />
                  </div>
                  <p className="text-xs font-bold text-center my-4">Tabletop</p>
                </div>
                <div>
                  <div className="flex items-center justify-center p-4 shadow-md rounded-xl bg-bg-dark text-secondary-foreground">
                    <HandheldIcon className="w-12 object-contain" />
                  </div>
                  <p className="text-xs font-bold text-center my-4">Handheld</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
