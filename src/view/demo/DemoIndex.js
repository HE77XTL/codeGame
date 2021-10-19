import React from 'react'
import DemoCircle from './DemoCircle'
import './demoIndex.css'
import MultipleCircle from './MultipleCircle'
import AntMotion from './AntMotion'
import AntMotionNumberChange  from './AntMotionNumberChange'
import TypistDemo  from './TypistDemo'
import WaveSurferDemo  from './WaveSurferDemo'


const DemoIndex = function () {

//--- useState ----------------------

//--- useEffect ----------------------

//--- function ----------------------

//--- operate ----------------------

    return (<div className='demoIndex'>
        <DemoCircle/>
        <MultipleCircle />
        <AntMotion />
        <AntMotionNumberChange />
        <WaveSurferDemo />
        <TypistDemo />
    </div>)
}

export default DemoIndex
