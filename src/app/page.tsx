"use client"

import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';
 
 export type UploadResult ={

  info:{
public_id:string
  },
  event:'success',
}


export default function Home() {
  const [imageId, setImageId] = useState("cld-sample-5")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton 
      onUpload={(result:UploadResult)=>{
        setImageId(result.info.public_id);
      }}
      uploadPreset="nnr8n4tc" />
{imageId && (
      <CldImage
  width="400"
  height="300"
  src={imageId}
  // tint="70:blue:green:purple"
  // blurFaces
  sizes="100vw"
  alt="Description of my image"
/>
  )}
</main>
  )
}
