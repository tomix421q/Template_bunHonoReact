import { createFileRoute } from '@tanstack/react-router'
import { LoaderPinwheel } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <div className='text-3xl mx-auto flex flex-col items-center mt-72'>
        <div className=' tracking-widest font-extrabold text-7xl flex'>
          <p className='translate-y-2 border-t'>💪Bun</p>
          <p className='-translate-y-4 border-b'>Hono🚀</p>
          <p className='-translate-y-8 border-t'>React⚙️ </p>
        </div>
        <p className='text-accent border-y tracking-widest px-2 -z-50 uppercase'>Stack</p>
        <div className='animate-spin w-fit mx-auto'>
          <LoaderPinwheel className='size-22' />
        </div>
      </div>

      <div className='text-center'>
        <button className='btn btn-primary mt-4' onClick={() => setCounter((prev) => prev + 1)}>
          Click me! {counter}
        </button>
      </div>
    </>
  )
}
