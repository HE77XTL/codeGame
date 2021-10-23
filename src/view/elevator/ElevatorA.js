import React from 'react'
import person from '../../assets/person.png'
import personMove from '../../assets/personMove.gif'
import './elevatorA.css'

const ElevatorA = function () {

//--- useState ----------------------

//--- useEffect ----------------------

//--- function ----------------------

//--- operate ----------------------

    return (<div className={'elevatorPageA'}>
        <div className={'pillar'}>

        </div>
        <div className={'elevatorBox'}>
            <div className={'person'}>
                <img src={personMove} className={'personImg'}  alt=""/>
            </div>
        </div>
        <div className={'waitPerson'}>
            <img src={person} className={'personImg'} alt=""/>
        </div>
    </div>)
}

export default ElevatorA
