import Image from 'next/image'
import grady from '@/public/Rectangle.png'
import logo from '@/public/logo (2).png'
import SelectOptions from '@/components/SelectOptions'

const SelectPage = () => {
  return (
    <div className='flex overflow-hidden'>
         <div className="w-1/2 h-screen">
            <div className="relative isolate bg-gradient-to-tl from-[#3E11F1A6] to-[#216FE4A6] h-screen">
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
            </div>
            <div className="absolute top-6 left-8">
                <Image src={logo} alt="logo" />
            </div>
        </div>
         <div className="w-1/2 h-screen flex flex-col items-center justify-center">
            <div className='max-w-xs'>
                <ol>
                    <li className='list-decimal font-semibold text-xl'>
                        <SelectOptions />
                    </li>
                </ol>
            </div>
         </div>
    </div>
  )
}

export default SelectPage