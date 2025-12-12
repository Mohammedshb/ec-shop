import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center 
     md:flex-row md:items-start bg-gray-800 p-8 rounded-md md:justify-between gap-8 md:gap-0">
      <div className="flex flex-col gap-4 items">
        <Link href="/" className="flex items-center md:items-start">
          <Image
            src="/logo.png"
            alt="logo"
            width={36}
            height={36}
            className=" w-6 h-6 md:w-9 md:h-9 "
          />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            ECO-Shop
          </p>
        </Link>
        <p className='text-gray-400'>2025 ECO-Shop </p>
        <p className='text-gray-400'>ALL rights reserved</p>
      </div>
      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
        <p className='text-amber-50 text-sm'>Links</p>
         <Link href="/">Homepage</Link>
         <Link href="/">Contact</Link>
         <Link href="/">Terms of Service</Link>
         <Link href="/">Privacy Policy</Link>
      </div>
       <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
        <p className='text-amber-50 text-sm'>Links</p>
         <Link href="/">Homepage</Link>
         <Link href="/">Contact</Link>
         <Link href="/">Terms of Service</Link>
         <Link href="/">Privacy Policy</Link>
      </div>
       <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
        <p className='text-amber-50 text-sm'>Links</p>
         <Link href="/">Homepage</Link>
         <Link href="/">Contact</Link>
         <Link href="/">Terms of Service</Link>
         <Link href="/">Privacy Policy</Link>
      </div>
       <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
        <p className='text-amber-50 text-sm'>Links</p>
         <Link href="/">Homepage</Link>
         <Link href="/">Contact</Link>
         <Link href="/">Terms of Service</Link>
         <Link href="/">Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer
