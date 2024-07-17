import { FC } from "react";
import Image from "next/image";


type Props = {
    src: string;
    alt?: string;
    width: number;
    height: number;
}


// sfc
const Eyecatch: FC<Props> = ({src, alt="", width, height}) => {
    return ( 
        <div className="flex justify-center items-center">
            <div className="container flex justify-center items-center max-w-5xl px-8">
                <figure className="w-full">
                    <Image className="w-full" 
                    src={src} alt={alt} width={width} height={height} />
                </figure>
            </div>
        </div>
     );
}
 

export default Eyecatch;