import React from 'react';

function MonthlyFlower(){
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
        <p>Monthly Flower</p>
        </div>
    );
}

export default MonthlyFlower;