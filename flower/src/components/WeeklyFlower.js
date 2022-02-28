import React from 'react';
import Circle from './Circle';

/**
 * each slice of the flower is 51.4285714286 degrees
 */

function WeeklyFlower(){
    
    const container = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"500px",
        padding:"20px",
    }
    
    return(
        <div style={container}>
            <p>WeeklyFlower</p>
            <Circle/>
        </div>
    );
}

export default WeeklyFlower;