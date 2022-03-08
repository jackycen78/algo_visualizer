import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const style = { width: 400, margin: 'auto', marginTop: 20, marginBottom: 25, color:'red'};
const marks = {
  10: '10',
  30: '30',
  50: '50'
};

function NodesSlider(props) { 
    return (
    <div>
        <div style={style}>
        <Slider min={10} max={50} marks={marks} onChange={props.changeNodes} defaultValue={30} />
        </div>
    </div>
)}

export {NodesSlider}
