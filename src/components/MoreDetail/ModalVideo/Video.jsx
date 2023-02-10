import {useState} from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import * as Icon from 'components/Icons/Icon';
import React from 'react'

function Video() {
    const [isOpen, setOpen] = useState(false)
  return (
    <div>
         <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="58NeNkQPdOs" onClose={() => setOpen(false)} />
      <button  className="btn-primary" onClick={()=> setOpen(true)}>
      <img style={{ width: "30px", height: '30px' }} src={Icon.playIcon} alt="" />
      {/* <span>Play Trailer</span> */}
      </button>
    </React.Fragment>
    </div>
  )
}

ReactDOM.render(
  <Video />,  
    document.getElementById('root')
)

export default Video