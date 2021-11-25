import React from 'react'
import '../../css/skyBottom.scss'
import boat from './boatImg/boat.gif'

export default function SkyBottom() {
    return (
        <div className='skyBottom'>
            <div className='boat__animation2'>
                <img src={boat} alt="" />
            </div>
            <div className='boat__animation1'>
                <img src={boat} alt="" />
            </div>

            <div className='sailboat'>
                <div className='sailboat-left'>
                    <img src="https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/sailboatLeft.webp" alt="" />
                </div>
                <div className='sailboat-right'>
                    <img src="https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/sailboatRight.webp" alt="" />
                </div>
            </div>

        </div>
    )
}
