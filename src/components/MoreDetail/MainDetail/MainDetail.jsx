import React from 'react'
import styles from './MainDetail.scss';
import * as Icon from 'components/Icons/Icon';
import { useEffect, useState } from "react";
import axios from "axios";
import tmdbApi from 'api/tmdbApi';
import { useParams } from 'react-router-dom';
import Circle from 'components/MoreDetail/Circle/Circle';
import Video from 'components/MoreDetail/ModalVideo/Video'

function MainDetail() {
  // credit


  // const {id} = useParams()
  // const detailId =id?.split('-')[0]

  const category = useParams()
  console.log(5, category);
  const categoryData = 'movie';
  const categoryDatas = 'tv';

  const background = useParams()
  const backgroundData = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg'

  const [dataDetail, setDataDetail] = useState({});
  const detailId = 100088;


  useEffect(() => {
    const loadLevels = async () => {
      try {
        const params = {
          language: "vi",
          credit: 'en-US'
        }
        const data = await tmdbApi.detail(categoryDatas, detailId, { params })
        setDataDetail(data)
      }
      catch (error) {
        console.log(error)
      }
    };
    loadLevels();
  }, [detailId]);

  let imgContent = dataDetail?.backdrop_path
  // console.log('img', img);
  console.log(36, dataDetail?.created_by)

  return (
    <div className='mainDetail'>
      <div style={{ backgroundImage: `url(${backgroundData})` }} className="mainDetails">
        <div className="newColor">
          <div className="img">
            <div className="background">
              <img style={{ marginLeft: '30px', width: '330px', borderRadius: '10px' }} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${imgContent}`} alt="" />
            </div>
          </div>
          <div className="text">
            <div>
              <h3 style={{ fontSize: '3.2rem', fontFamily: 'Source Sans Pro, Arial, sans-serif' }}>Những Người Còn Sót Lại (2023)</h3>
            </div>
            <div>
              <span style={{ border: '1px solid white', padding: '2px' }}>TV-MA</span>
              <span style={{ marginLeft: '10px' }}>Phim Chính Kịch, Sci-Fi & Fantasy, Action & Adventure  <span>time</span>
              </span>
              <div className="icon">
                <ul style={{ display: 'inline-flex', listStyle: 'none', marginTop: '30px' }}>
                  <li style={{ display: ' inline-flex' }}><Circle /> <p style={{ marginTop: '10px', marginLeft: '10px' }}>User <br /> Score</p></li>
                  <li><div style={{ padding: '12px', background: '#032541', width: '46px', borderRadius: '50%', margin: '15px 20px' }}><img style={{ width: "16px", height: '16px', padding: '' }} src={Icon.thumbanailIcon} alt="" /></div></li>
                  <li><div style={{ padding: '12px', background: '#032541', width: '46px', borderRadius: '50%', margin: '15px 20px' }}><img style={{ width: "16px", height: '16px', padding: '' }} src={Icon.heartIcon} alt="" /></div></li>
                  <li><div style={{ padding: '12px', background: '#032541', width: '46px', borderRadius: '50%', margin: '15px 20px' }}><img style={{ width: "16px", height: '16px', padding: '' }} src={Icon.bookmarkIcon} alt="" /></div></li>
                  <li><div style={{ padding: '12px', background: '#032541', width: '46px', borderRadius: '50%', margin: '15px 20px' }}><img style={{ width: "16px", height: '16px', padding: '' }} src={Icon.starIcon} alt="" /></div></li>
                  <span style={{ marginTop: '23px' }}>
                    <button> <Video /></button>
                  </span>
                </ul>
              </div>
            </div>
            <h3 style={{ color: '#afafaf', fontFamily: '-moz-initial', fontStyle: 'italic', fontSize: '22px', marginTop: '30px' }}>When you're lost in the darkness, look for the light.</h3>
            <h3 style={{ marginTop: '20px' }}>Overview</h3>
            <p style={{ fontSize: '18px', marginTop: '20px' }}>
              Được chuyển thể từ tựa game nổi tiếng cùng tên, The Last of Us là câu chuyện về thế giới giữa đại dịch xác sống.
              Đó là nơi mà Joel và Ellie, một cặp đôi được kết nối với nhau nhờ sự khắc nghiệt của thế giới, buộc phải dựa vào
              nhau giữa những hoàn cảnh tàn khốc trong chuyến hành trình xuyên nước Mỹ thời hậu đại dịch.
            </p>
            <ul style={{ display: 'flex', color: 'white', listStyle: 'none', marginTop: '20px' }}>
              <li>
                <a style={{ color: 'white', fontSize: '20px' }} href="http://">Craig Mazin</a>
                <p>Creator</p>
              </li>
              <li style={{ marginLeft: '250px' }}>
                <a style={{ color: 'white', fontSize: '20px' }} href="http://">Neil Druckmann</a>
                <p>Creator</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainDetail

