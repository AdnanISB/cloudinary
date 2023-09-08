'use server'

import cloudinary from 'cloudinary';
// import { revalidatePath } from 'next/cache';


export async function setAsFavoriteAction(publicId:string,
    isFavorite:boolean)
    {
        
        if(isFavorite){
            await cloudinary.v2.uploader.add_tag("favorites",[publicId]);

        }else{
            await cloudinary.v2.uploader.remove_tag("favorites",[publicId]);

        }
    //     await new Promise((resolve) => setTimeout(resolve,1500))
    // revalidatePath(path);

}