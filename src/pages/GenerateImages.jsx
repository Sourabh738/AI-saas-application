import { Image, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const GenerateImages = () => {

const imageStyle = ['Realistic', 'Ghibli style', 'Anime style', 'Cartoon style', 'Fantasy style', 'Realistic style', '3D style', 'Portrait style']

         
    
        const [selectedStyle, setSelectedStyle] = useState('Realistic')
        const [input, setInput] = useState('')
        const [publish, setPublish] = useState(false)


        const onSubmitHandler = async (e)=>{
          e.preventDefault();
        }


  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4
     text-slate-700'>
      {/*left col */}
      <form  onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#00AD25]'/>
          <h1 className='text-xl font-semibold'>AI Image Generator</h1>
        </div>
        <p className='mt-6 text-sm font-semibold'>Describe your image</p>

        <textarea onChange={(e)=>setInput(e.target.value)} value={input} rows={4} className='w-full p-2 px-3 mt-2 outline-none text-sm
         rounded-md border border-gray-300' placeholder='Describe what you want to see in the image...' required/>

         <p className='mt-4 text-sm font-medium'>Style</p>

         <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
          {imageStyle.map((item)=>(
            <span onClick={()=> setSelectedStyle(item)}
             className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedStyle === item ? 'bg-green-50 text-green-700' : 
              'text-gray-500 border-gray-300'}`}
              key={item}>{item}</span>
          ))}
         </div>

          <div className='my-6 flex items-center gap-2'>
            <label className='relative cursor-pointer'>
              <input type="checkbox" onChange={(e)=>setPublish(e.target.checked)}
              checked={publish} className='sr-only peer'/>

              <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition'></div>

              <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4'></span>

            </label>
            <p>Make this image public</p>
          </div>

          <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
            <Image className='w-5'/>
            Generate Image
          </button>
      </form>
      {/*right col*/}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>

        <div className='flex items-center gap-3'>
          <Image className='w-5 h-5 text-[#00AD25]'/>
          <h1 className='text-xl font-semibold'>Generated images</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Image className='w-9 h-9'/>
            <p>Enter a topic and click "Generate image" to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenerateImages
