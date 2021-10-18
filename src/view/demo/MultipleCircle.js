import React, {useState, useEffect} from 'react'
import Circle from 'react-circle';
import './multipleCircle.css'


const MultipleCircle = function () {
    const [progress, setProgress] = useState(80);

    useEffect(() => {
        let timer = null

        function changeRatio() {
            timer = setInterval(() => {
                const random = Math.random();
                const randomNum = parseInt(50 * random);
                setProgress(randomNum + 40)
            }, 1000)
        }

        changeRatio();
        return () => {
            clearInterval(timer)
        }
    }, []);


    return (<div className='multipleCircle'>
        <div className={'circleA circleItem'}>
            <Circle
                animate={true} // Boolean: Animated/Static progress
                animationDuration="2s" //String: Length of animation
                responsive={false} // Boolean: Make SVG adapt to parent size
                size={200} // Number: Defines the size of the circle.
                lineWidth={6} // Number: Defines the thickness of the circle's stroke.
                progress={100} // Number: Update to change the progress and percentage.
                progressColor="#005859"  // String: Color of "progress" portion of circle.
                bgColor="" // String: Color of "empty" portion of circle.
                textColor="#cccccc" // String: Color of percentage text color.
                textStyle={{
                    font: 'bold 5rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                }}
                percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                roundedStroke={false} // Boolean: Rounded/Flat line ends
                showPercentage={false} // Boolean: Show/hide percentage.
                showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
        </div>
        <div className={'circleB  circleItem'}>
            <Circle
                animate={true} // Boolean: Animated/Static progress
                animationDuration="2s" //String: Length of animation
                responsive={false} // Boolean: Make SVG adapt to parent size
                size={170} // Number: Defines the size of the circle.
                lineWidth={35} // Number: Defines the thickness of the circle's stroke.
                progress={100} // Number: Update to change the progress and percentage.
                progressColor="#005859"  // String: Color of "progress" portion of circle.
                bgColor="" // String: Color of "empty" portion of circle.
                textColor="#cccccc" // String: Color of percentage text color.
                textStyle={{
                    font: 'bold 5rem Helvetica, Arial, sans-serif', // CSSProperties: Custom styling for percentage.
                    fontStyle: 'italic',
                }}
                percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                roundedStroke={false} // Boolean: Rounded/Flat line ends
                showPercentage={false} // Boolean: Show/hide percentage.
                showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
        </div>
        <div className={'circleC circleItem'}>
            <Circle
                animate={true} // Boolean: Animated/Static progress
                animationDuration="1s" //String: Length of animation
                responsive={false} // Boolean: Make SVG adapt to parent size
                size={110} // Number: Defines the size of the circle.
                lineWidth={30} // Number: Defines the thickness of the circle's stroke.
                progress={progress} // Number: Update to change the progress and percentage.
                progressColor="#01faf6"  // String: Color of "progress" portion of circle.
                bgColor="" // String: Color of "empty" portion of circle.
                textColor="#01faf6" // String: Color of percentage text color.
                textStyle={{
                    font: 'bold 5rem ledNumber, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                }}
                percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                roundedStroke={false} // Boolean: Rounded/Flat line ends
                showPercentage={false} // Boolean: Show/hide percentage.
                showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
        </div>
        <div className={'circleItem ratioNumberWrap'}>
            <div>
                <span className={'ratioNumber'}>{progress}</span>
                <span>%</span>
            </div>
        </div>
    </div>)
}

export default MultipleCircle
