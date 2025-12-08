import React from 'react'
import Slides from './footer/slides/Slides'



const bloghome = () => {
  const data =[
    {
        id:1,
        titleOne:"my first blog and intro",
        titleTwo:"my second blog",
        paraOne:"this is my first blog para",
        paraTwo:"this is my second blog para",
        name:"author name",
        subTitle:"blog subtitle",
        qrCode:"./images/qrcode.png",
        cover:'./images/blogCover.jpg'
    }
  ]  
  return (
    <div>
        <section className='home'>
            <div className="left-content">
                {
                    data.map((item) =>{
                        return(
                            <div className="content">
                                <div className="logo">
                                    <h1>WM</h1>
                                </div>
                                <div className="home-img">
                                    <img src={item.cover} alt="homeImg"  height={'100%'} />
                                </div>
                                <div className="text">
                                    <h1>{item.titleOne}</h1>
                                    <p>{item.paraOne}</p>
                                    <span>{item.name}</span>
                                </div>
                                <div className="text text2">
                                    <h1>{item.titleTwo}</h1>
                                    <p>{item.paraTwo}</p>
                                    <span>{item.subTitle}</span>
                                </div>
                                <div className="qr-code">
                                    <img src={item.qrCode} alt="qrCode" height={'130px'} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="right-content">
                <Slides/>
            </div>

        </section>
    </div>
  )
}

export default bloghome