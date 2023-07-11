import { useEffect } from 'react'

export default function BaiduMap(props) {
  const { className = '' } = props

  useBaiduMap(() => {
    var map = new BMapGL.Map("container")
    map.onclick = openMapInBrowser
    map.disableDragging()
    map.disablePinchToZoom()
    map.disableDoubleClickZoom()
    map.setDefaultCursor('pointer')
    var point = new BMapGL.Point(120.241695, 30.366236)
    var marker = new BMapGL.Marker(point)
    var label = new BMapGL.Label('浙江省杭州市上城区环丁东支路123号', {
      offset: new BMapGL.Size(15, -22)
    })
    setCenter()
    marker.setLabel(label)
    map.addOverlay(marker)

    setTimeout(() => {
      // 移除百度版权信息和 logo 展示
      const box = document.getElementById('container')
      const nodes = box.querySelectorAll('.anchorBL')
      nodes.forEach(node => node.remove())
    }, 100)


    function setCenter() {
      map.centerAndZoom(point, 15)
    }

    return setCenter
  })

  function openMapInBrowser() {
    if (window.confirm('是否前往浏览器打开百度地图？')) {
      window.open('https://map.baidu.com/search/%E6%B5%99%E6%B1%9F%E7%9C%81%E6%9D%AD%E5%B7%9E%E5%B8%82%E4%B8%8A%E5%9F%8E%E5%8C%BA%E7%8E%AF%E4%B8%81%E4%B8%9C%E6%94%AF%E8%B7%AF123%E5%8F%B7/@13385364.125,3528913,19z?querytype=s&da_src=shareurl&wd=%E6%B5%99%E6%B1%9F%E7%9C%81%E6%9D%AD%E5%B7%9E%E5%B8%82%E4%B8%8A%E5%9F%8E%E5%8C%BA%E7%8E%AF%E4%B8%81%E4%B8%9C%E6%94%AF%E8%B7%AF123%E5%8F%B7&c=179&src=0&pn=0&sug=0&l=13&b=(13353733,3513143;13399813,3535671)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2', '_blank')
    }
  }

  return (
    <div
      id="container"
      className={className}
    ></div>
  )
}

function useBaiduMap(fn) {
  useEffect(() => {
    window.BMAP_PROTOCOL = "https";
    window.BMapGL_loadScriptTime = (new Date).getTime();
    var script = document.createElement('script')
    script.src = 'https://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=AVsOfgaGvKWB0MPKNtZW5qDIb2obON5k&services=&t=20230613170744'
    if (process.env.NODE_ENV === 'production') {
      script.src = 'https://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=WHRSRcIb1WGj7nP8eVyOvzYXkBzEb5jA&services=&t=20230613170744'
    }

    let setCenter

    script.onload = () => {
      setCenter = fn()
      window.addEventListener('resize', setCenter)
    }

    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
      window.removeEventListener('resize', setCenter)
    }
  }, [fn])
}
