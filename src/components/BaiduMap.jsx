import { useEffect } from 'react'

export default function BaiduMap(props) {
  const { className } = props

  useBaiduMap(() => {
    var map = new BMapGL.Map("container")
    map.disableDragging()
    var point = new BMapGL.Point(120.241695, 30.366236)
    var markergg = new BMapGL.Marker(point);
    setCenter()
    map.addOverlay(markergg);

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
    script.src = 'https://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=AVsOfgaGvKWB0MPKNtZW5qDIb2obON5k&services=&t=20230613170744'

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
