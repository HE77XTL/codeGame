import React from 'react'
import Typist from 'react-typist';

const TypistDemo = function () {

//--- useState ----------------------

//--- useEffect ----------------------

//--- function ----------------------

//--- operate ----------------------
    const MyComponent = function () {
        return (<div>
            <h4>dfs4856df4s65</h4>
        </div>)
    }

    return (<div>
        <Typist>
            Animate this text.
        </Typist>
        <div style={{padding: '50px'}}>
            <Typist>
                <span className="my-custom-class"> First Sentence </span>
                <br />
                <div className="container">
                    <p> This will be animated after first sentence is complete </p>
                    <MyComponent prop1="val1"> More text. </MyComponent>
                </div>
                Final sentence
            </Typist>
        </div>
        <div style={{padding: '50px'}}>
            <Typist>
                <span> First Sentence </span>
                <Typist.Backspace count={8} delay={200} />
                <span> Phrase </span>
            </Typist>
        </div>
    </div>)
}

export default TypistDemo
