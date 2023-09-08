'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CldImage } from "next-cloudinary";
import { useState } from "react"
import { Label } from "@radix-ui/react-dropdown-menu";


export default function EditPage({
    searchParams:{publicId},
}:{
    searchParams:{
        publicId: string
    };
}){
    const [Transformation, setTransformation] = useState
    <undefined|"generative-fill"|"blur"|"grayscale"|"pixelate"|"bg-remove">();

    const[pendingPrompt, setpendingPrompt]=useState("");
    const[prompt,setPrompt]=useState("");
    

    return (
        <section >
          <div className='flex flex-col gap-8' >
            <div className='flex justify-between'>
              <h1 className='text-4xl font-bold'>Edit {publicId}</h1>
            </div> 
            <div className="flex gap-4">
            <Button variant="ghost" onClick={()=>setTransformation(undefined)}>Clear All</Button>
           <div className="flex flex-col gap-4"> <Button onClick={()=>{
            setTransformation('generative-fill')
            setPrompt(pendingPrompt); 
          }}>
            Apply Generative Fill
            </Button>

           <Label>Prompt</Label>
           
           <Input value={pendingPrompt} onChange={(e)=>setpendingPrompt(e.currentTarget.value)}/>
           </div>
            <Button onClick={()=>setTransformation('grayscale')}>Convert to Gray</Button>
            <Button onClick={()=>setTransformation('blur')}>Apply Blur</Button>
            <Button onClick={()=>setTransformation('pixelate')}>Pixelate</Button>
            <Button onClick={()=>setTransformation('bg-remove')}>Remove Background</Button>

            </div>
            <div className="grid grid-cols-2 gap-12">
            <CldImage 
            src={publicId} height="300" width="200"  alt="some image"/>       
            {Transformation==="generative-fill"&&(
                 <CldImage 
                 src={publicId}
                  height="300"
                   width="200" 
                    alt="some image"
                    crop="pad"
                    fillBackground={{
                      prompt,
                      }}
                    /> 
            )}
               {Transformation==="blur"&&(
                 <CldImage 
                 src={publicId}
                  height="300"
                   width="200" 
                    alt="some image"
                   blur="800"/> 
            )}
               {Transformation==="grayscale"&&(
                 <CldImage 
                 src={publicId}
                  height="300"
                   width="200" 
                    alt="some image"
                   grayscale/> 
            )}
             {Transformation==="pixelate"&&(
                 <CldImage 
                 src={publicId}
                  height="300"
                   width="200" 
                    alt="some image"
                   pixelate/> 
            )}
                         {Transformation==="bg-remove"&&(
                 <CldImage 
                 src={publicId}
                  height="300"
                   width="200" 
                    alt="some image"
                   removeBackground/> 
            )}

            </div>
          </div>
        </section>
      );
}