import React from 'react'
import Cdata from './Cdata.jsx'
import './card.css'

const card = () => {
  return (
    <>
      <div className="card grid top">
        {Cdata.map((value) => {
            return(
              <div className="box" key={value.id}>
                <div className="img">
                  <img src={value.cover} alt="cover" width={'100%'} height={'200px'} loading='lazy' />
                </div>
                <span>
                  {value.category}
                </span>
                <h2>
                  {value.title}  
                </h2>
              </div>
            )

          })}
      </div>
    </>
  )
}

export default card