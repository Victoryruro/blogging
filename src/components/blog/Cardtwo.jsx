import React from 'react'
import Sdata from './footer/slides/Sdata'
import './footer/slides/style.css'

const Cardtwo = () => {
  return (
    <>
        <div className="slide cardtwo top ">
            {Sdata.map((value)=>{
                    return(
                        <div className='box'>
                            <div className="img">
                                <img src={value.cover} alt="image" height={'200px'} loading='lazy'/>
                            </div>
                            <div className="text">
                                <span>{value.category}</span>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Cardtwo