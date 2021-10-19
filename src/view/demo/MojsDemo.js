import React, {useRef, useEffect, useState, useCallback} from 'react'
import mojs from '@mojs/core'

const MojsDemo = function ({duration}) {
    const animDom = useRef();
    const bouncyCircle = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    /* ADD CUSTOM SHAPE SOMEWHERE IN YOUR CODE */
    class Heart extends mojs.CustomShape {
        getShape () { return '<path d="M92.6 7.4c-10-9.9-26-9.9-35.9 0l-4.4 4.3a3.4 3.4 0 0 1-4.7 0l-4.3-4.3c-10-9.9-26-9.9-35.9 0a25 25 0 0 0 0 35.5l22.4 22.2 13.5 13.4a9.5 9.5 0 0 0 13.4 0L70.2 65 92.6 43a25 25 0 0 0 0-35.5z"/>'; }
        getLength () { return 200; } // optional
    }
    mojs.addShape( 'heart', Heart ); // passing name and Bubble class


    useEffect(() => {
        // Prevent multiple instansiations on hot reloads
        if (bouncyCircle.current) return;

        // Assign a Shape animation to a ref
        bouncyCircle.current = new mojs.Shape({
            parent: '#mojsDemoContainer',
            shape:        'circle',     // shape 'circle' is default
            radius:       25,           // shape radius, (rect, polygon 都有这个属性 ，radiusX radiusY 相当于长宽）
            // radiusX:      35, // explicit radiusX
            fill:         'transparent',// same as 'transparent'
            stroke:       '#F64040',    // or 'cyan'
            strokeWidth:  5,            // width of the stroke
            top:          '50%',
            // x:            'rand(-250, 250)',
            x:            -200,
            scale:         { 0 : 1 },
            duration:      1000,
            delay:         1000,
            easing:        'cubic.out',
            repeat:        7,
            isShowStart: true,
        });
        bouncyCircle.current.play()
        new mojs.Shape({
            parent: '#polygonDemo',
            shape:        'polygon',
            points:       5,
            left:         '75%',
            fill:         { 'deeppink' : '#00F87F' },
            x:            { 'rand(-100%, -200%)' : 0  },
            rotate:        { 0: 'rand(0, 360)' },
            radius:       25,

            duration:     2000,
            repeat:       999,
        }).play();

         new mojs.Shape({
             parent: '#rectDemo',
            shape:        'rect',
            left:         '50%',
            fill:         'none',
            radius:       20,
            stroke:       { 'rgba(0,255,255, 1)' : 'magenta' },
            strokeWidth:  { 10: 0 },
            strokeDasharray: '100%',
            strokeDashoffset: { '-100%' : '100%' },
            rotate:        { 0: 180 },

            duration:     2000,
            repeat:       999,
        }).play();


        new mojs.Shape({
            parent: '#heartDemo',
            shape:    'heart',
            fill:     'none',
            stroke:   { 'white' : 'deeppink' },
            scale:    { 0 : 1 },
            strokeWidth: { 50 : 0 },
            y:         -20,
            duration:  1000,
            repeat:       999,
        }).play();




    });

    // Update the animation values when the prop changes
    // useEffect(() => {
    //     if (!bouncyCircle.current) return;
    //     bouncyCircle.current.tune({ duration: duration });
    //     isOpen
    //         ? bouncyCircle.current.replayBackward()
    //         : bouncyCircle.current.replay();
    //     setIsOpen(!isOpen);
    // }, [duration]);

    // const clickHandler = useCallback(() => {
    //     // If the "modal" is open, play the animation backwards, else play it forwards
    //     isOpen ? bouncyCircle.current.playBackward() : bouncyCircle.current.play();
    //     setIsOpen(!isOpen);
    // }, [isOpen]);

    return (
        <div ref={animDom} className="MojsExample" style={{position: 'relative', height: '500px'}}>
            <div className="content">
                <h1>MoJS React Example</h1>
                <p>Using hooks</p>
            </div>
            <div id={'mojsDemoContainer'} />
            <div id={'polygonDemo'} />
            <div id={'rectDemo'} />
            <div id={'heartDemo'} />
        </div>
    );
}

export default MojsDemo
