import React, {useState} from 'react'
import Circle from 'react-circle';
import { Button } from 'antd';

const DemoCircle = function () {

//--- useState ----------------------
    const [progress, setProgress] = useState(10);

//--- useEffect ----------------------

//--- function ----------------------
    function CircleRise() {
        setProgress(77)
    }


//--- operate ----------------------

    return (<div>
        <div style={{width: '500px'}}>
            <Circle
                animate={true} // Boolean: Animated/Static progress
                animationDuration="2s" //String: Length of animation
                responsive={false} // Boolean: Make SVG adapt to parent size
                size={200} // Number: Defines the size of the circle.
                lineWidth={30} // Number: Defines the thickness of the circle's stroke.
                progress={progress} // Number: Update to change the progress and percentage.
                progressColor="red"  // String: Color of "progress" portion of circle.
                bgColor="#ddd" // String: Color of "empty" portion of circle.
                textColor="#cccccc" // String: Color of percentage text color.
                textStyle={{
                    font: 'bold 5rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                }}
                percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                roundedStroke={true} // Boolean: Rounded/Flat line ends
                showPercentage={true} // Boolean: Show/hide percentage.
                showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
        </div>
        <div>
            <Button onClick={CircleRise}>start</Button>
        </div>
    </div>)
}

export default DemoCircle
