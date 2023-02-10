import React from 'react'
import './ReviewMovie.scss'

function ReviewMovie() {

    return (
        <div className='reviewMove'>
            <div className="menu">
                <h3>Social</h3>
                <p> <a href="">Reviews <span>0</span></a> </p> 
                <p> <a href="">Discussions </a><span>12</span> </p>
            </div>
            <div className="content">               
                    <div className="contents" style={{justifyContent:'space-between', display:'flex'}}>
                        <div>
                           <span><img style={{borderRadius:'50%'}} src="https://www.themoviedb.org/t/p/w45_and_h45_face/qpuUNplRt3TrrEratMUFZiofNWD.jpg" alt="" /></span> 
                            <span style={{marginTop:'30px'}}>So far following the game pretty faithfully</span>
                        </div>
                        <div>open</div>
                        <div>3</div>
                        <div>Feb 05, 2023 at 2:39 AM <br /> by therapist</div>
                    </div>      
                    <div className="contents"  style={{justifyContent:'space-between', display:'flex'}}>
                        <div>
                            <img style={{borderRadius:'50%'}} src="https://www.themoviedb.org/t/p/w45_and_h45_face/qpuUNplRt3TrrEratMUFZiofNWD.jpg" alt="" />
                            <span style={{paddingTop:'20px'}}>So far following the game pretty faithfully</span>
                        </div>
                        <div>open</div>
                        <div>3</div>
                        <div>Feb 05, 2023 at 2:39 AM <br /> by therapist</div>
                    </div>         
                    <h3 style={{margin:'30px 0px'}}>Go to Discussions</h3>               
            </div>
        </div>
    )
}

export default ReviewMovie