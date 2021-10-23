import React from 'react'
import Elevator from '../elevator/Elevator'
import ElevatorA from '../elevator/ElevatorA'
import ElevatorB from '../elevator/ElevatorB'
import teamLogo from '../../assets/teamLogo.png'
import './home.css'

const Home = function () {

//--- useState ----------------------

//--- useEffect ----------------------

//--- function ----------------------

//--- operate ----------------------

    return (<div className='homePage'>
        <div className={'homeTitle'}>
            <img src={teamLogo} className={'teamLogo'} alt=""/>
        </div>
        <div className={'elevatorWrap'}>
            <Elevator/>
            <ElevatorA/>
            <ElevatorB/>
        </div>
    </div>)
}

export default Home
