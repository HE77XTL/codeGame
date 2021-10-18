import React from 'react'
import TweenOne from 'rc-tween-one';
import './antMotion.css'
import {Button} from "antd";

const AntMotion = function () {

//--- useState ----------------------

//--- useEffect ----------------------

//--- function ----------------------

//--- operate ----------------------

    return (<div className={'antMotion'}>
        <TweenOne
            animation={{
                x: 0,
                y: 0,
                scale: 1,
                rotate: 60,
                yoyo: true, // demo 演示需要
                repeat: -1, // demo 演示需要
                duration: 1000
            }}
            paused={false}
            // style={{ transform: 'translateX(-80px)' }}
            className="code-box-shape"
        >
            <Button type={'primary'}>456</Button>
        </TweenOne>
    </div>)
}

export default AntMotion
