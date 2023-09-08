'use client'

import { Heart } from '@/components/icons/heart';
import { CldImage, CldImageProps } from 'next-cloudinary';
import { setAsFavoriteAction } from './action';
import { useTransition } from 'react';
import { SearchResult } from './page';
import { FullHeart } from '@/components/icons/full-heart';
import path from 'path';
import { useState } from 'react';
import { ImageMenu } from '@/components/image-menu';

export function CloudinaryImage(props :
    {imageData:SearchResult; 
    onUnheart?:(unheartedResource:SearchResult)=>void;
} & Omit <CldImageProps,"src">
) {
    const [transition,startTransition]=useTransition();
    const{imageData , onUnheart} = props;

    const [isFavorited, setIsFavorited]= useState(
        imageData.tags.includes("favorites")
    )
   return(
    <div className='relative'> 
        <CldImage {...props} 
        src={imageData.public_id}/>
        {
            isFavorited?(
            <FullHeart
            onClick={()=>{
                onUnheart?.(imageData);
                setIsFavorited(false);
                startTransition(()=>{
                    setAsFavoriteAction(imageData.public_id, false);
    
                });
            }}
            className='absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer'/>)
            
            :(
       
        <Heart onClick={()=>{
            setIsFavorited(true);
            startTransition(()=>{
                setAsFavoriteAction(imageData.public_id, true);

            });
        }}
        className='absolute top-2 left-2  hover:text-white text-red-500 cursor-pointer'/> )}
    
    <ImageMenu image={imageData}/>
    </div>
   )
 
};