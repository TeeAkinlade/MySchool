import grady from '@/public/Rectangle.png'
import logo from '@/public/logo (2).png'
import digit from '@/public/Frame 1707478695.png'
import SelectOptions from '@/components/SelectOptions'
import Image from 'next/image'

const SelectPage3 = () => {
  return (
    <div className='flex overflow-hidden'>
         <div className="w-full md:w-1/2 h-screen">
            <div className="flex flex-col justify-center items-center relative isolate bg-gradient-to-tl from-[#3E11F1A6] to-[#216FE4A6] h-screen">
                <svg
                aria-hidden="true"
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                >
                    <defs>
                    <pattern
                        x="50%"
                        y={-1}
                        id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                        width={200}
                        height={200}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                    </defs>
                    <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0} />
                </svg>
                <div className="absolute top-0">
                    <Image src={grady} className="w-screen h-screen opacity-50" alt=""/>
                </div>
                <div className="hidden md:block absolute top-6 left-8">
                    <Image src={logo} alt="logo" />
                </div>
                <div className="relative md:hidden bg-white rounded-2xl mt-10">
                    <div className=' max-w-xs p-6'>
                        <div className="absolute -top-7">
                        <p className='text-xl font-semibold rounded-lg bg-white px-3 py-2 border-2 border-[#216FE4A6] border-t-0'>2.</p>
                        </div>
                        <SelectOptions />
                    </div>
                </div>
                <div className="grid grid-cols-2 justify-between items-center pt-16 md:hidden">
                    <button className="text-white underline underline-offset-8 text-start cursor-pointer">Back</button>
                    <button className="bg-white px-16 py-2 rounded-lg text-[#2563EB] cursor-pointer">Next</button>
                </div>
            </div>
        </div>
         <div className="hidden w-1/2 h-screen md:flex flex-col items-center justify-center">
            <div className='relative max-w-xs'>
                <div className="absolute -top-8">
                    <p className='text-xl font-semibold rounded-lg bg-white'>2.</p>
                </div>
                <SelectOptions />
            </div>
         </div>
    </div>
  )
}

export default SelectPage3