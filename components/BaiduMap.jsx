import { useEffect } from 'react'

export default function BaiduMap(props) {
  const { className } = props

  useBaiduMap(() => {
    var map = new BMapGL.Map("container")
    map.disableDragging()
    var point = new BMapGL.Point(120.241695, 30.366236)
    var marker = new BMapGL.Marker(point);
    var label = new BMapGL.Label('浙江省杭州市上城区环丁东支路123号', {
      offset: new BMapGL.Size(15, -22)
    })
    setCenter()
    marker.setLabel(label)
    map.addOverlay(marker);

    function setCenter() {
      map.centerAndZoom(point, 15)
    }

    return setCenter
  })

  return (
    <div id="container" className={className}></div>
  )
}

function useBaiduMap(fn) {
  useEffect(() => {
    window.BMAP_PROTOCOL = "https";
    window.BMapGL_loadScriptTime = (new Date).getTime();
    var script = document.createElement('script')
    // script.src = 'https://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=AVsOfgaGvKWB0MPKNtZW5qDIb2obON5k&services=&t=20230613170744'
    script.src = 'https://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=WHRSRcIb1WGj7nP8eVyOvzYXkBzEb5jA&services=&t=20230613170744'

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
