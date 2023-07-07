import Link from 'next/link'
import { navList } from '@/shared'

export default function Footer() {
  return (
    <div className='pt-6 text-[#52575c] bg-[rgb(248,248,248)]'>
      <div className='m-auto xl:w-[1280px]'>
        <div className='flex justify-center text-[#333] font-medium'>
          {navList.map((item, index) => {
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`px-12 relative hover:text-[#223987]${index === navList.length - 1 ? '' : ' after:absolute after:right-0 after:top-1/2 after:w-[1px] after:h-3 after:bg-[#d8d8d8] after:-translate-y-1/2'}`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className='flex justify-center text-xs pt-8'>
          Copyright © 中苏达尔阀门科技（杭州）有限公司 地址：浙江省杭州市上城区环丁东支路123号
        </div>
        <div className='flex justify-center text-xs pt-1 pb-4'>备案号: 浙ICP备2021028231号-1</div>
      </div>
    </div>
  )
}
