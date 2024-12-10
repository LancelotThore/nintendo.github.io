import Image from "next/image";

interface ImageProps {
    src: string;
    alt: string;
}

export default function ImageGallery({ src, alt }: ImageProps) {
    return (
        <Image className="min-w-32 w-32 rounded-xl" src={src} alt={alt} width={500} height={500} />
    );
}