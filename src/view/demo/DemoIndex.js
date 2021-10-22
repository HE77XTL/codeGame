import React from 'react'
import DemoCircle from './DemoCircle'
import './demoIndex.css'
import MultipleCircle from './MultipleCircle'
import AntMotion from './AntMotion'
import AntMotionNumberChange  from './AntMotionNumberChange'
import TypistDemo  from './TypistDemo'
import WaveSurferDemo  from './WaveSurferDemo'
import MojsDemo  from './MojsDemo'

import axios from 'axios'

import {Button} from "antd";


const DemoIndex = function () {

//--- useState ----------------------

//--- useEffect ----------------------

//--- function ----------------------
    function axiosTest() {
        axios({
            method: 'get',
            url: `/api/test`,
        }).then(res => {
            console.log(res)
        })
    }

//--- operate ----------------------

    return (<div className='demoIndex'>
        <DemoCircle/>
        <MultipleCircle />
        <AntMotion />
        <AntMotionNumberChange />
        <WaveSurferDemo />
        <TypistDemo />
        <MojsDemo duration={1000}/>
        <div>
            <Button onClick={axiosTest}>axiosTest</Button>
        </div>
    </div>)
}

export default DemoIndex
