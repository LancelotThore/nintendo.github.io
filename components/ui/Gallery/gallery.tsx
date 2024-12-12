"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import ImageGallery from "./imageGallery";
import { ChevronLeftIcon, ChevronRightIcon, HeartIconOutline, DownloadIcon, PegiIcon } from "@/components/ui/icons";
import Breadcrumb from "@/components/ui/breadcrumb";
import Link from "next/link";

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
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const listRef = useRef<HTMLUListElement>(null);
    const [isFavorite, setIsFavorite] = useState(false);

    const updateScrollButtons = () => {
        if (listRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
        }
    };

    const scrollLeft = () => {
        if (listRef.current) {
            listRef.current.scrollBy({ left: -200, behavior: 'smooth' });
            setTimeout(updateScrollButtons, 300);
        }
    };

    const scrollRight = () => {
        if (listRef.current) {
            listRef.current.scrollBy({ left: 200, behavior: 'smooth' });
            setTimeout(updateScrollButtons, 300);
        }
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <section className="bg-bg-gallery">
            <div className="flex flex-col md:grid md:grid-cols-5 gap-y-4 gap-x-12 gap-4 shadow w-full p-4 xl:rounded-2xl xl:max-w-7xl m-auto bg-background translate-y-8 pb-6">
                <Breadcrumb></Breadcrumb>
                    <div className="col-span-3">
                        <div className="w-full mb-3 aspect-video mb-3 rounded-xl overflow-hidden">
                            <Image className="w-full" src={selectedImage.src} alt={selectedImage.alt} width={500} height={500} />
                        </div>
                        <div className="relative flex rounded-xl overflow-hidden">
                            <ul ref={listRef} onScroll={updateScrollButtons} className="flex items-center overflow-x-auto md:overflow-hidden gap-3 relative pb-2">
                                {images.map((image, index) => (
                                    <li key={index} onClick={() => setSelectedImage(image)} className="w-fit aspect-video transition-opacity duration-300 cursor-pointer hover:opacity-70 cover">
                                        <ImageGallery src={image.src} alt={image.alt} />
                                    </li>
                                ))}
                            </ul>
                            {canScrollLeft && (
                                <button onClick={scrollLeft} className="hidden md:block flex items-center justify-center absolute left-0 z-10 bg-button-background/50 text-button-foreground p-4 h-full rounded-xl cursor-pointer"><ChevronLeftIcon className="w-6" /></button>
                            )}
                            {canScrollRight && (
                                <button onClick={scrollRight} className="hidden md:block flex items-center justify-center absolute right-0 z-10 bg-button-background/60 text-button-foreground p-4 h-full rounded-xl cursor-pointer"><ChevronRightIcon className="w-6" /></button>
                            )}
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col gap-6">
                        <div className="flex items-center text-sm">
                            <div className="w-0.5 h-full bg-accent mr-1.5"></div>
                            <span>Nintendo Switch</span>
                        </div>
                        <h1 className="text-xl md:text-2xl font-bold">Stardew Valley</h1>
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl md:text-2xl font-bold">$19.99</h2>
                            <button onClick={toggleFavorite} className="cursor-pointer text-accent w-6 h-6 relative">
                                <HeartIconOutline className={`w-12 transition-opacity duration-300 absolute translate-x-[-25%] translate-y-[-50%] ${isFavorite ? 'filled' : ''}`} />
                            </button>
                        </div>
                        <div className="flex items-center gap-2 text-xs min-h-12">
                            <Image src={'/my-nintendo-gold-coin.avif'} alt="Illustration my nintendo gold coin" width={150} height={150} className="w-6"></Image>
                            <p>Eligible for up to <b>75</b> Gold Points</p>
                        </div>
                        <button className="flex items-center justify-center w-full bg-accent text-secondary-foreground p-4 rounded-xl gap-4 xl:text-xl	"><DownloadIcon className="w-6"/>Add To Cart</button>
                        <span className="text-xs">This item will be sent to your system automatically after purchase.</span>
                    </div>
                <Link href={"/"} className="flex text-xs gap-3 items-center col-span-3">
                    <PegiIcon className="min-h-16 min-w-11" />
                    <div className="flex flex-col gap-0.75 max-w-80 w-fit">
                        <p>Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated Gambling, Mild Language, Mild Blood</p>
                        <hr className="text-detail"/>
                        <p>Users interact</p>
                    </div>
                </Link>
            </div>
        </section>
    );
}