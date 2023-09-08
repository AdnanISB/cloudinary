"use client"

// import { CloudinaryImage } from "@/app/gallery/cloudinary-image";
import { SearchResult } from "@/app/gallery/page";  
import { ReactNode } from 'react'

const Max_col = 4;

export function ImageGrid({images, getImage}:{images:SearchResult[];
    getImage:(imageData:SearchResult)=>ReactNode;})  {

    function getColumns(colIndex: number) {
        return images.filter((resource, index) => index % Max_col ===  colIndex
        )
      }
  return (
    <div className='grid grid-cols-4 gap-4'>

    {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
      (column, index) => (
        <div key={index} className='flex flex-col gap-4'>
          {column.map(getImage)} 
        </div>
      )
    )}
  </div>

  )
}

