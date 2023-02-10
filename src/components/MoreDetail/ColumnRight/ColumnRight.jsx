import React from 'react';
import * as Icon from 'components/Icons/Icon';
import './ColumnRight.scss'

function ColumnRight(){
  return (
    <div className='ColumnRight'>


      <div className="icon">
        <img src={Icon.facebookIcon} alt="" />
        <img src={Icon.twitetrIcon} alt="" />
        <img src={Icon.instagraIcon} alt="" />
        <img src={Icon.linkIcon} alt="" />

      </div>
      <div className='ColumnRight-text'>
        <h4>Facts</h4>
        <ul>
          <li>
            <div >
              <h4>Original Name</h4>
              <p>The Last of Us</p>
            </div>
          </li>
          <li>
            <div>
              <h4>Status</h4>
              <p>Returning Series</p>
            </div>
          </li>
          <li>   <div>
            <h4>Network</h4>
            <img src={Icon.hboIcon} alt="" />
          </div>
          </li>
          <li>
            <div>
              <h4>Type</h4>
              <p>Scripted</p>
            </div>
          </li>
          <li>
            <div>
              <h4>Original Language</h4>
              <p>Tiếng Anh</p>
            </div>
          </li>
          <li>
            <div className='texList'>
              <h4>Keywords</h4>
              <ul>
                <li>people smuggling</li>
                <li>post-apocalyptic future</li>
                <li>infection</li>
                <li>survival</li>
                <li>shootout</li>
                <li>epidemic</li>
                <li>based on video game</li>
                <li>violence</li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="texBottom">
          <ul>
            <li >
              <div>
                <h4>Content Score</h4>
                <div>
                  <p>767</p>
                </div>
                <p>Pump it up! We're close now.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Top Contributors</h4>
                <div style={{ display: 'flex' }}>
                  <img style={{ borderRadius: '50%' }} src={Icon.razeIcon} alt="" />
                  <p style={{ padding: '0px 15px' }}>
                    <p>495</p>
                    <p>raze464</p>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex' }}>
                <img style={{ borderRadius: '50%' }} src={Icon.neganIcon} alt="" />
                <p style={{ padding: '0px 15px' }}>
                  <p>495</p>
                  <p>raze464</p>
                </p>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex' }}>
                <img style={{ borderRadius: '50%' }} src={Icon.darksanIcon} alt="" />
                <p style={{ padding: '0px 15px' }}>
                  <p>495</p>
                  <p>raze464</p>
                </p>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex', }}>
                <img style={{ borderRadius: '50%' }} src={Icon.neganIcon} alt="" />
                <p style={{ padding: '0px 15px' }}>
                  <p>495</p>
                  <p>raze464</p>
                </p>
              </div>
            </li>
            <li>
              <div>
                <p>View Edit History</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Popularity Trend</h4>
              </div>
            </li>
            <li>
              <div style={{
                background: '#202020',
                color: 'white', textAlign: 'center',
                padding: '6px 5px', borderRadius: '30px',
              }}>
                <p>LOGIN TO EDIT</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ColumnRight