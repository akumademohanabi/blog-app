import Link from "next/link";
import { FC } from "react";
import {ChevronLeft, ChevronRight} from 'lucide-react';

type Props = {
    preText?: string;
    preUrl?: string;
    nextText?: string;
    nextUrl?: string;
};



const Pagenation: FC<Props> = ({preText,preUrl,nextText,nextUrl}) => {
 return   (
    <div className="flex justify-center items-center">
    <ul className="container flex flex-row justify-between items-center gap-2 max-w-5xl">
        {preText && preUrl ? (
            <li>
                <Link href={preUrl} className="flex flex-row justify-center irems-center gap-2" >
                <ChevronLeft size={16}/>
                <span>{preText}</span>
                </Link>
            </li>
        ): (<div></div>)}
         {nextText && nextUrl ? (
            <li>
                <Link  href={nextUrl}  className="flex flex-row justify-center irems-center gap-2">
                <span>{nextText}</span>
                <ChevronRight size={16}/>
                </Link>
            </li>
        ): (<div></div>)}
    </ul>
 </div>
 )

};

export default Pagenation;