import Link from 'next/link'
import { navList } from 'utils/shared'

export default function Footer() {
  return (
    <div className='pt-6 text-[#52575c] bg-[rgb(248,248,248)]'>
      <div className='m-auto xl:w-[1280px]'>
        <div className='text-sm flex justify-center text-[#333] font-medium md:flex'>
          {navList.map((item, index) => {
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`px-2 relative hover:text-[#223987]${index === navList.length - 1 ? '' : ' after:absolute after:right-0 after:top-1/2 after:w-[1px] after:h-3 after:bg-[#d8d8d8] after:-translate-y-1/2'} xs:px-6 md:px-12`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className='px-4 pt-4 flex flex-col items-center text-xs md:pt-8 lg:flex-row lg:justify-center'>
          <div className='text-center'>Copyright © 中苏达尔阀门科技（杭州）有限公司</div>
          <div className='text-center mt-1 lg:mt-0 lg:ml-4'>地址：浙江省杭州市上城区环丁东支路123号</div>
        </div>
        <div className='flex justify-center text-xs pt-1 pb-4'>
          <a href="https://beian.miit.gov.cn/" target="_blank">备案号: 浙ICP备2021028231号-1</a>
        </div>
      </div>
    </div>
  )
}
