import React from 'react'
import './MediaTv.scss'
function MediaTv() {
  return (
    <div className="mediaTv">
        <div className="mediaTvMenu">
            <h3>Media</h3>
            <p>Most Popular</p>
            <p> Videos 0</p> 
            <p> Backdrops 35</p>
            <p> Posters 69</p>
        </div>
        <div className="mediaTvImg">
            <img style={{width:'587px'}} src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg" alt="" />
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg" alt="" />
        </div>
    </div>
  )
}

export default MediaTv