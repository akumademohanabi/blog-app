import {Github, Facebook, X, Link} from 'lucide-react';




const Social = () => {
    return (
        <ul className='flex flex-row justify-center items-center gap-x-6'>
            <li>
                <Link href={'https://x.com/home?/lang=ja'}/>
                <X size={24} />
                <span className='sr-only'>X</span>
            </li>
            <li>
                <Link href={'https://www.facebook.com/locale=ja_JP'}/>
                <Facebook size={24} />
                <span className='sr-only'>Facebook</span>
            </li>
            <li>
                <Link href={'https://github.com'}/>
                <Github size={24} />
                <span className='sr-only'>github</span>
            </li>
        </ul>
    );
}

export default Social;