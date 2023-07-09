import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  // const bgRate = 1920 / 866
  // const bgWidth = canUseDom ? window.innerWidth : 1920

  return (
    <>
      {/* <Head>
        <title>中苏达尔阀门科技(杭州)有限公司</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className='bg-slate-50 overflow-x-hidden'>
        <div className='relative w-screen h-56 sm:h-96 lg:h-[560px] xl:h-[866px]'>
          <Image
            src="http://bms.zhongsudaer.com/images/2022062117155959701.jpg"
            fill
            alt=""
          />
        </div>
      </main>
    </>
  )
}
