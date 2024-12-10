"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import ImageGallery from "./imageGallery";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";

const images = [
    {
        src: "/games/stardew_valley/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7.avif",
        alt: "Stardew Valley"
    },
    {
        src: "/games/stardew_valley/6016d2f6d874ad4a1063a28181597427f6fe9ee207ce3c8351c10dda377b3bb4.avif",
        alt: "Stardew Valley"
    },
    {
        src: "/games/stardew_valley/dcd6f1feda032d04e7220e97e24d93d1f9c963285c88bd8e81e06a20d193054c.avif",
        alt: "Stardew Valley"
    },
    {
        src: "/games/stardew_valley/767ac7ae1903bc92ab31b2e131d422c0f8dc9912fd52ce51afc984b6b6974e83.avif",
        alt: "Stardew Valley"
    },
    {
        src: "/games/stardew_valley/767ac7ae1903bc92ab31b2e131d422c0f8dc9912fd52ce51afc984b6b6974e83.avif",
        alt: "Stardew Valley"
    }
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const listRef = useRef<HTMLUListElement>(null);

    const scrollLeft = () => {
        if (listRef.current) {
            listRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (listRef.current) {
            listRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-300 pb-6">
            <div className="">
                <div className="">
                    <div className="w-full mb-3 aspect-video mb-3 rounded-xl overflow-hidden">
                        <Image className="w-full" src={selectedImage.src} alt={selectedImage.alt} width={500} height={500}/>
                    </div>
                    <div className="">
                        <ul ref={listRef} className="flex items-center overflow-hidden gap-3 relative">
                            {images.map((image, index) => (
                                <li key={index} onClick={() => setSelectedImage(image)} className="w-fit aspect-video transition-opacity duration-300 cursor-pointer hover:opacity-70 cover">
                                    <ImageGallery src={image.src} alt={image.alt} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={scrollLeft} className="flex items-center justify-center absolute left-0 z-10 bg-button-background/50 text-button-foreground p-4 h-full rounded-xl cursor-pointer"><ChevronLeftIcon className="w-6"/></button>
                    <button onClick={scrollRight} className="flex items-center justify-center absolute right-0 z-10 bg-button-background/60 text-button-foreground p-4 h-full rounded-xl cursor-pointer"><ChevronRightIcon className="w-6"/></button>
                </div>
            </div>
            <div className="col-span-1 md:col-span-1">
                <h1 className="text-4xl text-black font-normal my-7">Bonsai</h1>
                <h2 className="text-3xl text-black font-normal my-0">$19.99</h2>
                <div className="border-t border-gray-300 mt-8 pt-4">
                    <p className="text-gray-600">The purposes of bonsai are primarily contemplation for the viewer, and the pleasant exercise of effort and ingenuity for the grower.</p>
                    <p className="text-gray-600">By contrast with other plant cultivation practices, bonsai is not intended for production of food or for medicine. Instead, bonsai practice focuses on long-term cultivation and shaping of one or more small trees growing in a container.</p>
                </div>
                <button className="relative inline-block bg-gray-800 text-white border-none rounded-none py-5 px-10 text-lg uppercase cursor-pointer transform transition-colors duration-300 tracking-wider mt-4 hover:bg-gray-600">Add To Cart</button>
            </div>
        </div>
    );
}