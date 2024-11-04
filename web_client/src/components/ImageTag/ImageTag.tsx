import Image from 'next/image';

interface IImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

const ImageTag = ({ src, alt, className, width = 500, height = 500 }: IImageProps) => {
    return <Image src={src} alt={alt} width={width} height={height} className={`${className}`} />;
};

export default ImageTag;
