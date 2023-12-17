"use client"
import { useState } from 'react'
import '../globals.css'

export default function ClockWidget(){
    const [time, setTime] = useState();
    let now;
    const formatTime = (x) => {
        return ('0' + x).slice(-2);
    }
    const updateTime = () => {
        now = new Date();
        setTime(`${formatTime(now.getHours())} : ${formatTime(now.getMinutes())} : ${formatTime(now.getSeconds())}`);
    }
    setInterval(updateTime, 1000);
    return (
        <div class="mt-36 p-5 text-[15vw] rounded-3xl">
            <p>{time}</p>
        </div>
    );
}