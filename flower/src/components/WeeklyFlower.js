import React, { useEffect, useState } from 'react';
import Circle from './Circle';
/**
 * each slice of the flower is 51.4285714286 degrees
 */

function WeeklyFlower(){
    const [currentWeek,setCurrentWeek] = useState([]); // array of keys corresponding to dates within current week
    const [petals,setPetals] = useState([]);
    const [petalsFetched,setPetalsFetched] = useState(false);
    const container = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"500px",
        padding:"20px",
    }

    useEffect(()=>{
        fetchPetals().then(()=>{
            console.log(petals);
        });
    },[]);

    function getThisWeek(){
        let curr = new Date;
        let week = [];
        for (let i = 1; i <= 7; i++) {
            let first = curr.getDate() - curr.getDay() + i;
            let day = new Date(curr.setDate(first)).toLocaleDateString();
            week.push(day);
        }
        setCurrentWeek(week);
        //console.log(currentWeek);
    }

    async function fetchPetals(){
        getThisWeek();
        let petals = [];
        currentWeek.forEach(e => {
            console.log("key is: ",e);
            let petal = localStorage.getItem(e);
            console.log("petal is: ",petal);
            petals.push(petal);
        });
        //console.log(petals);
    }
    
    return(
        <div style={container}>
            <p>WeeklyFlower</p>
            <Circle/>
            <p>{currentWeek}</p>
        </div>
    );
}

export default WeeklyFlower;