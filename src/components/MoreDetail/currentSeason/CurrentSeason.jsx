import React from 'react'
import './CurrentSeason.scss'

function CurrentSeason() {
  return (
    <div className='CurrentSeasonMain' style={{margin:'10px 40px'}}>
      <h2 style={{padding:'20px 0px'}}>Current Season</h2>
      <div className="CurrentSeason"> 
      <img src="https://www.themoviedb.org/t/p/w130_and_h195_bestv2/aUQKIpZZ31KWbpdHMCmaV76u78T.jpg" alt="" />
        <div className="CurrentSeason-text">
          <h2>Season 1</h2>
          <p>
            <span>2023 | 9 Episodes</span>
          </p>
          <p style={{paddingTop:'30px'}}>Season 1 of Những Người Còn Sót Lại premiered on January 15, 2023. </p>
        </div>
      </div>
      <h2 style={{padding:'20px 0px'}}>View All Seasons</h2>
    </div>
  )
}

export default CurrentSeason