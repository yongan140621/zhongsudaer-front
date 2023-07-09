import { products } from '@/shared'
import { useRouter } from 'next/navigation'

export default function Product() {
  const router = useRouter()
  return (
    <div className='p-2 w-full mx-auto xs:p-4 md:px-10 pc:w-[1280px] lg:py-16'>
      <div className='text-lg font-medium md:text-xl lg:text-3xl'>产品中心</div>
      <ul className='mt-4 xs:flex xs:flex-wrap xs:-mx-2'>
        {products.map(item => {
          return (
            <li
              key={item.id}
              className="mb-4 group cursor-pointer last:mb-0 xs:basis-1/2 xs:px-2 md:basis-1/3 lg:basis-1/4 lg:mb-6"
              onClick={() => router.push(`/product/detail?id=${item.id}`)}
            >
              <img src={item.src} alt={item.name} />
              <div className='leading-[40px] bg-[#f8f8f8] px-4 group-hover:bg-[#223987] group-hover:text-white'>{item.name}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
