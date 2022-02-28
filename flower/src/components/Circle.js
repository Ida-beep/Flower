import React from 'react';

function Circle(){
    const cicle = {
        display:"flex",
        width:"300px",
        height:"300px",
        border:"solid black 1px",
        borderRadius:"50%",
        margin:"20px",
    }
    
    return(
        <>
        <div style={cicle}></div>
        </>
    );
}

export default Circle;