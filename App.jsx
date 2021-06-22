import React ,{useState} from 'react';
import './index.css'
function App()
{
    let time=new Date().toLocaleTimeString();
     const [ctime,setCtime]=useState(time);

     const updateTime=()=>{
         time=new Date().toLocaleTimeString();
         setCtime(time);
     };
     setInterval(updateTime,1000);
    return(
        <>
        <h2>Digital Clock</h2>
        <h1>{ctime}</h1>
        <marquee>Disclaimer : This is the Digital_Clock App. I have created with using Reactjs.</marquee>
        </>
    );
};
export default App;