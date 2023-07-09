'use client'
import { useState, useEffect, useRef } from 'react'
import Script from 'next/script'
import { canUseDom } from '../shared'
import dynamic from 'next/dynamic'
import Head from 'next/head'

export default function Contact() {
  const ref = useRef(null)
  useEffect(() => {
    var map = new BMapGL.Map("container")
    map.disableDragging()
    ref.current = map
    var point = new BMapGL.Point(120.241695, 30.366236)
    var markergg = new BMapGL.Marker(point);
    setCenter()
    map.addOverlay(markergg);

    function setCenter() {
      map.centerAndZoom(point, 15)
    }

    window.addEventListener('resize', setCenter)

    return () => {
      window.removeEventListener('resize', setCenter)
    }
  }, [])

  useEffect(() => {

  }, [])

  return (
    <div className='pc:w-[1200px] pc:mx-auto lg:my-4'>
      <Head>
        {/* <script src='https://api.map.baidu.com/api?type=webgl&v=1.0&ak=WHRSRcIb1WGj7nP8eVyOvzYXkBzEb5jA'></script> */}
        <script src='https://api.map.baidu.com/api?type=webgl&v=1.0&ak=AVsOfgaGvKWB0MPKNtZW5qDIb2obON5k' />
      </Head>
      <div className='lg:flex'>
        <div id="container" className='h-80 lg:flex-1'></div>
        <div className='bg-[rgb(248,248,248)] py-4 px-4 sm:flex sm:justify-center sm:gap-x-5 lg:flex-1 lg:block lg:p-8'>
          <div>
            <div className='text-[#999]'>公司地址:</div>
            <div>浙江省杭州市上城区环丁东支路123号</div>
          </div>
          <div className='mt-4 sm:mt-0 lg:mt-20'>
            <div className='text-[#999]'>联系电话:</div>
            <div className='sm:flex sm:gap-x-5 lg:block lg:gap-0'>
              <div>18058741565 应女士</div>
              <div>13656671076 吴女士</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
