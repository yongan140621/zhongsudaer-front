import Link from 'next/link'
import { navList } from '@/shared'

export default function Header() {
  const logoRate = 4255 / 867

  return (
    <div className="bg-white sticky top-0 z-10">
      <div className='flex justify-between items-center m-auto px-2 h-20 md:px-6 lg:px-10 xl:w-[1280px]'>
        <div className='bg-[url(http://bms.zhongsudaer.com/images/logo.png)] h-10 w-56 bg-contain bg-no-repeat'></div>
        <div className='flex'>
          {navList.map((item, index) => {
            return (
              <Link
                className={`${index !== navList.length - 1 ? 'mr-10' : ''} group cursor-pointer hover:text-[#223987]`}
                key={item.path}
                href={item.path}
              >
                <div className={`border-b-2 border-transparent leading-[78px] group-hover:border-[#223987] group-hover:font-medium`}>{item.name}</div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
