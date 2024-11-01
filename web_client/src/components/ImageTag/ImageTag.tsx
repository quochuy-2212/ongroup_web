import Image from 'next/image';

interface IImageProps {
    src: string;
    alt: string;
    className?: string;
}

const ImageTag = ({ src, alt, className }: IImageProps) => {
    return <Image src={src} alt={alt} width={500} height={500} className={`${className}`} />;
};

export default ImageTag;
