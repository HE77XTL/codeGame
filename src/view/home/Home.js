import React from 'react'
import Elevator from '../elevator/Elevator'
import './home.css'

const Home = function () {

//--- useState ----------------------

//--- useEffect ----------------------

//--- function ----------------------

//--- operate ----------------------

    return (<div className='homePage'>
        <div>
            风和颂
        </div>
        <div className={'elevatorWrap'}>
            <Elevator/>
            <Elevator/>
            <Elevator/>
        </div>
    </div>)
}

export default Home
