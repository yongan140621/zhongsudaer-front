'use client'
import Head from 'next/head'
import Image from 'next/image'
import { products } from 'utils/shared'
import { useRouter } from 'next/navigation'
import BaiduMap from 'components/BaiduMap'
import PhoneText from 'components/PhoneText'

export default function Home() {
  const router = useRouter()
  return (
    <div className="overflow-x-hidden">
      <img src="/banner.jpeg" className='mx-auto' alt="中核苏阀" />
      <div className='py-6'>
        <div className='text-2xl text-center md:text-3xl'>产品中心</div>
        <div className='text-center text-sm text-[#666] mt-1 md:mt-2'>以客户需求和产品发展理念为驱动力</div>
        <ul className='px-2 mt-4 flex flex-wrap -mx-1 lg:-mx-3 pc:w-[1280px] pc:mx-auto'>
          {products.map(item => {
            return (
              <li key={item.id} className='basis-1/2 mb-4 px-1 cursor-pointer sm:basis-1/3 lg:px-3 lg:mb-8' onClick={() => router.push(`/product/detail?id=${item.id}`)}>
                <div className='group hover:shadow-xl'>
                  <div className="overflow-hidden">
                    <img src={item.src} alt={item.name} className='transition group-hover:scale-125' />
                  </div>

                  <div className="leading-8 bg-[#f8f8f8] px-2 text-sm md:leading-10 md:text-base lg:px-4">{item.name}</div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className='pc:w-[1420px] pc:mx-auto pc:bg-[#f5f5f5] pc:py-10'>
          <div className='pc:w-[1280px] pc:mx-auto'>
            <img src="/banner_6.png" alt="" />
          </div>
        </div>

        <div className='mt-4 sm:mt-8 md:px-2 lg:w-[1024px] lg:mx-auto lg:mt-12'>
          <img src="/banner_7.png" alt="" />
        </div>

        <div className='pc:w-[1420px] pc:mx-auto'>
          <img src="/banner_8.png" alt="" />
        </div>

        <div className="mt-8 px-2 py-4 bg-[#f5f5f5] pc:w-[1420px] pc:mx-auto">
          <div className='md:flex lg:px-40 lg:py-10'>
            <div className='md:basis-1/2'>
              <div className='text-xl font-semibold'>公司介绍</div>
              <div className='text-sm leading-relaxed line-clamp-4 md:text-base md:mr-4'>本公司(中苏达尔)创建于2014年，座落于国家历史文化名城-杭州。中苏达尔主要经营自动化设备、节能环保的技术开发、自动化成套设备的安装，批发零售管道阀门、机电设备、金属材料、电线电缆、五金电器。主要产品有球铁材质的：蝶阀、闸阀、止回阀、泄压阀、减压阀、钢管伸缩器、电、气动蝶阀、电、气动闸阀、信号蝶阀、信号闸阀、遥控浮球阀，防污隔断阀、倒流防止器、水利控制阀、过滤器、另外还有铜阀门、不锈钢材质的各式阀门。广泛用于冶金、化工食品、电力、工矿、石油、医药轻纺、造纸、给排水、空气管道设施，深受广大用户的信赖。公司通过ISO9001；2000国际质量体系认证。中苏达尔于2014年成为中核苏阀科技实业股份有限公司一级经销商(负责全国范围内发展和管理二级或项目经销商，开展分销和现代服务业务)，每年“中苏达尔”被评定为中核苏阀科技实业股份有限公司优秀经销商、优秀服务商。</div>
              <div
                className="bg-[#223987] mx-auto w-24 text-center text-white mt-2 text-sm leading-8 md:mx-0 md:mt-8"
                onClick={() => router.push('/introduce')}
              >
                查看更多
              </div>
            </div>
            <div className='mt-4 md:flex-1 md:mt-0'>
              <img className='' src="/company_1.jpeg" alt="" />
            </div>
          </div>
        </div>

        <div className="mt-8 w-full h-[444px] bg-[url(/banner_9.jpeg)] bg-[length:100%_100%] bg-no-repeat px-2 py-8 md:pt-20 pc:w-[1420px] pc:mx-auto">
          <div className='sm:flex lg:w-[1024px] lg:mx-auto'>
            <div className='text-white text-sm mb-10 sm:flex-1 sm:mt-10'>
              <div className='text-lg mb-3 sm:text-2xl sm:mb-10 md:text-3xl'>联系我们</div>
              <div className='mb-2 sm:mb-6 md:text-base'>公司地址: &nbsp;&nbsp;浙江省杭州市上城区环丁东支路123号</div>
              <div className='mb-1 md:text-base'>联系电话: &nbsp;&nbsp;<PhoneText text="18058741565" /> 应女士</div>
              <div className='md:text-base'><span className='invisible'>联系电话: </span>&nbsp;&nbsp;<PhoneText text="13656671076" /> 吴女士</div>
            </div>
            <BaiduMap className="h-56 sm:flex-1 sm:h-64" />
          </div>
        </div>
      </div>
    </div>
  )
}
