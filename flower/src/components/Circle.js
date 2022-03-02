import React from 'react';

function Circle(props){
        const cicle = {
            display:"flex",
            width:props.width,
            height:props.height,
            border:"solid black 1px",
            borderRadius:"50%",
            margin:props.margin,
            zIndex:props.zIndex,
            position:"absolute",
            marginLeft:props.marginLeft,
            marginRight:props.marginRight,
            marginTop:props.marginTop,
            marginBottom:props.marginBottom,
        }
    
    return(
        <>
        <div style={cicle}></div>
        </>
    );
}

export default Circle;