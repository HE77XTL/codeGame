import React, {useEffect, useRef} from 'react'
import WaveSurfer from 'wavesurfer.js'
import {Button} from "antd";

const WaveSurferDemo = function () {

    const useWaveSurfer = useRef(null)
    let wavesurfer  = useWaveSurfer.current;

    function initWave() {
        // Prevent multiple instansiations on hot reloads
        if (useWaveSurfer.current) return;
        wavesurfer = WaveSurfer.create({
            container: '#waveform',
            cursorColor: '#ffffff',
            progressColor: '#fbfbfb',
            waveColor: '#000000',
            cursorWidth: 0,
        });
        wavesurfer.load('/super_mario_bros1.mp3');
        wavesurfer.on('ready', function () {
            wavesurfer.play();
        });
    }

    useEffect(()=> {
        initWave()
    }, []);
    function onPlay() {
        wavesurfer.play();
    }

    function onPause() {
        wavesurfer.pause();
    }

    return (<div>
        <div id="waveform" style={{width:'28800px', backgroundColor:'#000000'}}>
            waveform
        </div>
        <div>
            <Button onClick={onPlay}>play</Button>
            <Button onClick={onPause}>pause</Button>
        </div>
    </div>)
}

export default WaveSurferDemo
