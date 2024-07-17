import { Category } from "@/types/blog";
import { selectCategories } from "@/utils/supabase";
import { FolderOpen, Link } from "lucide-react";
import { useEffect, useState } from "react";


const PostCategory = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(()=>{
        const fetchCategories = async ()=>{
            const data = await selectCategories();
            setCategories(data);
        }
        fetchCategories();
    }, []);




    return ( 
        <div className="flex flex-row lg:flex-col py-4 gap-4 w-full lg:w-60 items-start lg:items-end">
            <FolderOpen size={16}/>
            {categories.map(({id, name}) => (
                <Link href={`/blog/category/${id}`} key={id}> 
                <div>{name}</div>
                </Link>
            ))}
            <div>カテゴリー１</div>
            <div>カテゴリー２</div>
        </div>
     );
}
 
export default PostCategory;