import React from 'react';
import Circle from './Circle';
import Img from '../assets/placeholder.jpeg';

function MonthlyFlower(){
    const container = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"600px",
        paddingBottom:"80px",
    }
    const week = {
        display:"flex",
        wdith:"100%",
        transform:"scale(0.5)",
    }

    return(
        <div style={container}>
        {/* <p>Monthly Flower</p> */}
        <div style={week}>
            <img src={Img} alt={"flower"}/>
            <img src={Img} alt={"flower"}/>
            <img src={Img} alt={"flower"}/>
            <img src={Img} alt={"flower"}/>
{/*             <Circle color={"grey"}hasPetal={false} marginTop={"0%"} zIndex={"0"} width={"300px"} height={"300px"}/>
            <Circle hasPetal={true} marginBottom={"20%"} marginLeft={"15%"} zIndex={"10"} width={"30px"} height={"30px"}/>
            <Circle hasPetal={true} marginRight={"15%"} marginBottom={"20%"} zIndex={"10"} width={"30px"} height={"30px"}/>

            <Circle hasPetal={true} marginLeft={"20%"} marginBottom={"5%"} zIndex={"10"} width={"30px"} height={"30px"}/>
            
            <Circle hasPetal={true} marginTop={"7%"} marginLeft={"15%"} zIndex={"10"} width={"30px"} height={"30px"}/>
            <Circle hasPetal={true} marginTop={"12%"} zIndex={"10"} width={"30px"} height={"30px"}/>
            <Circle hasPetal={true} marginTop={"7%"} marginRight={"15%"} zIndex={"10"} width={"30px"} height={"30px"}/>

            <Circle hasPetal={true} marginRight={"20%"} marginBottom={"5%"}zIndex={"10"} width={"30px"} height={"30px"}/> */}
        </div>
        </div>
    );
}

export default MonthlyFlower;