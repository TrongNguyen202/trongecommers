import React from 'react'

function GoogleMap() {
  return (
    <div >
      <div className="mapouter container mt-8 mb-8"><div className="gmap_canvas"><iframe className="gmap_iframe" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=600&height=400&hl=en&q=University of Oxford&t=&z=14&ie=UTF8&iwloc=B&output=embed" /><a href="https://piratebay-proxys.com/">Piratebay</a></div><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}" }} /></div>

    </div>
  )
}

export default GoogleMap
