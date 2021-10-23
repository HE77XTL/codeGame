import React from 'react'
import person from '../../assets/person.png'
import personMove from '../../assets/personMove.gif'
import './elevatorB.css'

const ElevatorB = function () {

//--- useState ----------------------

//--- useEffect ----------------------

//--- function ----------------------

//--- operate ----------------------

    return (<div className={'elevatorPageB'}>
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

export default ElevatorB
