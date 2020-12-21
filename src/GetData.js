import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Users from './Users';

const GetData = () => {
    const [grab,setgrab] = useState([]);
    const [input,setinput] = useState();
    const [city,setcity] = useState('Algiers');
    const inputch = (event) => {
        setinput(event.target.value);
    }
    useEffect(() => {
        data();
    },[city])
    
    const data = async () => {
        const response = await axios.get(`https://weather.ls.hereapi.com/weather/1.0/report.json?product=observation&name=${city}&apiKey=bleD8p59UZDlbxUNY3BQ9qUxvsFlpERe4qA2TwbTmSo`)
        setgrab(response.data.observations.location[0].observation[0].description)
        console.log(grab)
    }
    return (
        <div>
            <input type='text' onChange={(e)=>inputch(e)}></input>
            <p>{city}</p>
            <button onClick={() => data()}>Click me</button>
            <Users data={grab} />
        </div>
    )
}

export default GetData
