
// import cloudinary from "next-cloudinary";
import cloudinary from 'cloudinary';

import { CldImage } from 'next-cloudinary';
import { CloudinaryImage } from '../gallery/cloudinary-image';
import { SearchResult } from '../gallery/page';
import { ForceRefresh } from '@/components/force-refresh';
import FavoritesList from './favorites-list';


export default async function  FavoritesPage()  {
  const results = await cloudinary.v2.search
  .expression("resource_type:image AND tags=favorites")
  .sort_by("created_at","desc")
  .with_field("tags")
  .max_results(30)
  .execute() as {resources:SearchResult[]};
//  console.log(results);
 

  return (
    
    <section >
      <ForceRefresh/>


<div className='flex flex-col gap-8'>
          <div className='flex justify-between'>
        <h1 className='text-4xl font-bold'>Favorite Images</h1>
        </div>
        {/* <div className='grid grid-cols-4 gap-4'> */}

        {/* { 

results.resources.map((result)=>(
 <CloudinaryImage
 key={result.public_id}
 imageData={result}
 width='400'
 height='300'
 alt="an image of something" />))} */}

        {/* </div> */}
        <FavoritesList initialResources={results.resources}/>
        
        </div>
        </section>
  )
}

