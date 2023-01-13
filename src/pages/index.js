import Head from 'next/head'
import Image from 'next/image'

const canUseDom = typeof window !== 'undefined' && typeof document !== 'undefined'

function Header() {
  const logoRate = 4255 / 867

  const list = [
    {
      path: '/',
      name: '首页'
    },
    {
      path: '/contact',
      name: '联系我们'
    },
  ]

  return (
    <div className="shadow-md bg-white shadow-neutral-300 sticky top-0 z-10">
      <div className='flex justify-between items-center m-auto px-2 h-12 md:h-16 md:px-6 lg:px-10 xl:w-[1280px]'>
        <div className='bg-[url(http://bms.zhongsudaer.com/images/logo.png)] h-10 w-56 bg-contain bg-no-repeat'></div>
        {/* <Image
          src="http://bms.zhongsudaer.com/images/logo.png"
          height={40}
          width={40 * logoRate}
          alt=""
        /> */}
        {/* <ul className='flex text-sm'>
          {list.map((item, index) => {
            return (
              <li
                className={`${index !== list.length - 1 ? 'mr-2 ' : ''}`}
                key={item.path}
                onClick=""
              >{item.name}</li>
            )
          })}
        </ul> */}
      </div>

    </div>
  )
}

function Footer() {
  const list = [
    [
      {
        id: 0,
        icon: '',
        title: '公司地址',
        desc: '浙江省杭州市中石化'
      },
      {
        id: 0,
        icon: '',
        title: '联系电话',
        desc: ['13170937737', '13170937738', '13170937739']
      },
      {
        id: 0,
        icon: '',
        title: '公司传真',
        desc: '0512-67530042'
      },
    ],
    [
      {
        id: 0,
        icon: '',
        title: '公司地址',
        desc: '浙江省杭州市中石化'
      },
      {
        id: 0,
        icon: '',
        title: '联系电话',
        desc: '13170937737'
      },
      {
        id: 0,
        icon: '',
        title: '公司传真',
        desc: '0512-67530042'
      },
    ],
  ]

  return (
    <div className='pt-6 text-[#52575c]'>
      <div className='m-auto xl:w-[1280px]'>
        <div className='flex'>
          {list.map((items, index) => {
            return (
              <div key={index} className='flex-1 flex justify-center'>
                <ul className="px-1">
                  {items.map(item => {
                    return (
                      <li
                        key={item.title}
                        className="mb-3"
                      >
                        <div className='text-zinc-400 text-xs sm:text-sm'>{item.title}：</div>
                        {Array.isArray(item.desc) ? (
                          item.desc.map(text => (
                            <div key={text} className='pl-4 text-sm sm:text-base'>{text}</div>
                          ))
                        ) : <div className='pl-4 text-sm sm:text-base'>{item.desc}</div>}

                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>

        <div className='flex justify-center text-xs pt-4 pb-3'>
          备案号：浙ICP备2021028231号
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  // const bgRate = 1920 / 866
  // const bgWidth = canUseDom ? window.innerWidth : 1920

  return (
    <>
      <Head>
        <title>中苏达尔阀门科技(杭州)有限公司</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <main className='bg-slate-50 overflow-x-hidden'>
        <div className='relative w-screen h-56 sm:h-96 lg:h-[560px] xl:h-[866px]'>
          <Image
            src="http://bms.zhongsudaer.com/images/2022062117155959701.jpg"
            fill
            alt=""
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
