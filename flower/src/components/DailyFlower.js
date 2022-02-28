import React, {useEffect, useState} from 'react';
import { ChromePicker } from 'react-color';
import Petal from './Petal';
import Button from 'react-bootstrap/Button';
import RangeSlider from 'react-bootstrap-range-slider';
import Form from 'react-bootstrap/Form';

/**
 * Need to check if the component works, if no data is saved currently for today
 */

function DailyFlower(){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [showColors,setShowColors] = useState(false);
    const [showShape,setShowShape] = useState(false);
    const [showText,setShowText] = useState(false);
    const [chosenColor,setChosenColor] = useState("rgb(0,0,0,0.5)");
    const [chosenWidth,setChosenWidth] = useState(100);
    const [chosenHeight,setChosenHeight] = useState(100);
    const [chosenRotation,setChosenRotation] = useState(0);
    const [chosenText,setChosenText] = useState();
    
    /**
     * This useEffect get the current flower of today saved in localStorage
     */
    useEffect(()=>{
        let todaysFlower = localStorage.getItem(date);
        if(todaysFlower!=='undefined'){
            let petalData = todaysFlower.split('%');
            setChosenColor(petalData[0]);
            setChosenHeight(petalData[1]);
            setChosenRotation(petalData[2]);
            setChosenWidth(petalData[3]);
            setChosenText(petalData[4]);
        }
    },[])

    function handleColor(){
        setShowColors(!showColors);
        setShowShape(false);
        setShowText(false);
    }
    function handleShape(){
        setShowShape(!showShape);
        setShowColors(false);
        setShowText(false);
    }
    function handleText(){
        setShowText(!showText);
        setShowColors(false);
        setShowShape(false);
    }
    function handleChangeComplete(color){
        let c = color.rgb;
        let colorString = `rgb(${c.r},${c.g},${c.b},${c.a})`;
        setChosenColor(colorString);
    }
    function handleSave(){
        console.log("petal saved");
        localStorage.setItem(`${date}`,`${chosenColor}%${chosenHeight}%${chosenRotation}%${chosenWidth}%${chosenText}`);
    }
    const container = {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"500px",
        paddingBottom:"50px",
    }
    const subcontainer = {
        display:"flex",
        justifyItems:"center",
        width:"30%",
        marginLeft:"50px",
    }
    const leftsubcontainer = {
        display:"flex",
        flexDirection:"column",
        width:"30%",
    }
    const buttons = {
        marginBottom:"50px",
    }
    const button = {
        marginLeft:"20px",
        border:"none",
        padding:"10px",
        borderRadius:"27%",
        backgroundColor:"rgb(50,0,150,0.2)",
    }
    const tools = {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        height:"300px",
    }

    return(
        <div style={container}>
        <section style={leftsubcontainer}>
            <section style={buttons}>
                <Button style={button} onClick={handleColor}>Color</Button>
                <Button style={button} onClick={handleShape}>Shape</Button>
                <Button style={button} onClick={handleText}>Text</Button>
                <Button style={button} onClick={handleSave}>Save</Button>
            </section>
            <section style={tools}>
            {showColors?
            <ChromePicker
                color={chosenColor}
                onChangeComplete = {handleChangeComplete}
            /> : <></>}
            {showShape?
            <div>
                <p>Width</p>
                <RangeSlider
                    value={chosenWidth}
                    onChange={changeEvent => setChosenWidth(changeEvent.target.value)}
                />
                <p>Height</p>
                <RangeSlider
                    value={chosenHeight}
                    onChange={changeEvent => setChosenHeight(changeEvent.target.value)}
                />
                <p>Rotation</p>
                <RangeSlider
                    value={chosenRotation}
                    onChange={changeEvent => setChosenRotation(changeEvent.target.value)}
                />
            </div>
            : <></>}
            {showText?
            <div>
            <Form>
                <p>How are you today?</p>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" value={chosenText} rows={15} onChange={changeEvent => setChosenText(changeEvent.target.value)}/>
            </Form.Group>
            </Form>
            </div>
            
            : <></>}
            </section>
        </section>
        <section style={subcontainer}>
            <Petal width={chosenWidth} height={chosenHeight} color={chosenColor} rotation={chosenRotation}/>
        </section>
        </div>
    );
}

export default DailyFlower;