'use client'
import { useMemo } from 'react'
import { products } from '@/shared'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ProductDetail() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const index = products.findIndex(item => item.id === id)

  if (index === -1) {
    return (
      <div className='text-center py-40'>未找到该商品</div>
    )
  }

  const item = products[index]
  const tags = ['专业', '品质', '保障']

  let recommends = products.slice(index + 1)
  if (recommends.length > 3) {
    recommends = recommends.slice(index, index + 3)
  } else if (recommends.length < 3) {
    recommends.push(...(products.slice(0, 3 - recommends.length)))
  }

  return (
    <div className='md:p-4 pc:w-[1200px] pc:mx-auto lg:py-12'>
      <div className='py-2 px-2 text-sm md:text-base md:p-0 md:pb-4'><span className='hidden xs:inline'>您现在的位置: </span><Link href="/" className='hover:text-[#223987]'>首页</Link> &gt; <Link href="/product" className='hover:text-[#223987]'>产品中心</Link> &gt; {item.name}</div>

      <div className="md:flex">
        <img src={item.src} className="w-full h-64 xs:h-96 md:h-auto md:w-1/2" alt="" />
        <div className="p-4 flex-1 md:p-0 md:pl-4">
          <div className='text-2xl'>{item.name}</div>
          <div className='bg-[#f5f5f5] text-red-500 text-xl p-4 mt-2'>价格面议</div>
          <ul className="flex mt-2">
            {tags.map(item => {
              return (
                <li key={item} className="border px-2 py-1 text-xs mr-2 rounded-sm bg-[#bdbec7] text-[#223987]">
                  {item}
                </li>
              )
            })}
          </ul>
          </div>
      </div>

      <div className='px-4 my-4 xs:my-6 md:px-0 md:mb-0'>
        <div className='bg-[#f5f5f5] h-12 border-l'>
          <div className='leading-[48px] w-32 text-center bg-white border-t border-[#223987]'>产品详情</div>
        </div>
        <div className='border-l border-r border-b p-4 text-sm text-[#666] xs:text-base xs:p-6'>
          {item.desc}
        </div>
      </div>
      <div className='px-4 md:mt-8 md:px-0'>
        <div className='text-xl mb-4'>相关推荐</div>
        <ul className='sm:flex sm:-mx-1'>
          {recommends.slice(0, 3).map(item => {
            return (
              <li
                key={item.id}
                className="mb-4 group cursor-pointer sm:px-1"
                onClick={() => router.push(`/product/detail?id=${item.id}`)}
              >
                <img src={item.src} alt={item.name} />
                <div className="leading-10 bg-[#f8f8f8] group-hover:bg-[#223987] group-hover:text-white px-4">{item.name}</div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
