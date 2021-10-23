import React, {useRef, useState} from 'react'
import Elevator from '../elevator/Elevator'
import ElevatorA from '../elevator/ElevatorA'
import ElevatorB from '../elevator/ElevatorB'
import teamLogo from '../../assets/teamLogo.png'
import superMarioBros from '../../assets/super_mario_bros1.mp3'

import start from '../../assets/start.png'
import pause from '../../assets/pause.png'

import './home.css'

const Home = function () {
    const audioRef = useRef();
    const [isStart, setIsStart] = useState(false);

//--- useState ----------------------

//--- useEffect ----------------------

//--- function ----------------------
    function onPlay() {
        setIsStart(true)
        audioRef.current.play()
    }

    function onPause() {
        setIsStart(false)
        audioRef.current.pause()
    }

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
        <div className={'audioWrap'}>
            <audio
                ref={audioRef}
                src={superMarioBros}
                autoPlay
                loop
            />
            {isStart ? <div className={'startBtn'} onClick={onPause}>
                <img src={pause} className={'BtnImg'} alt=""/>
            </div> : <div className={'startBtn'} onClick={onPlay}>
                <img src={start} className={'BtnImg'} alt=""/>
            </div>}

        </div>
    </div>)
}

export default Home
