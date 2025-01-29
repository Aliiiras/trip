import { getImagePath } from "@/app/core/utils/helper";
import Image from "next/image";

const ImageWrapper = ({src,alt,useImage = false, ...props}) => {
    const fullPath = getImagePath(src);
    if(useImage) {
        return <Image src={fullPath} alt={alt || 'image'} {...props} />;
    }
        return <img src={fullPath} alt={alt || 'image'} {...props} />;
    }
export default ImageWrapper;