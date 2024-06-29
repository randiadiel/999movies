import { StaticImageData } from "next/image";
import { useCallback, useState } from "react";

import FallbackImage from './assets/poster-placeholder.png'

const useFallbackImage = () => {
    const [fallbackImage, setFallbackImage] = useState<StaticImageData | null>(null);

    const onImageError = useCallback(() => {
        setFallbackImage(FallbackImage);
    }, [setFallbackImage])
    
    return {fallbackImage, onImageError};
}
 
export default useFallbackImage;