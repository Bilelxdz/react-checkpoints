import React,{useState} from 'react'
import './Cards.css'
const Cards = ({data}) => {
    const [index, setstate] = useState(0)
    const next = () => {
        if(index + 1 < data.length){
            setstate(index + 1)
        }
    }
    const prev = () => {
        if(index - 1 >= 0) {
            setstate(index - 1)
        }
        
    }
    return (
        <div>
            
            <div className='Maincontainer' style={{ borderLeft: `${data[index].featured ? '5px solid hsl(180, 29%, 50%)':""}`}}>
                <div className='NodeContainer'>
                    <img src={data[index].logo}/>
                    <div className='flexing1'>
                        <div className='flexing'>
                            <ul id='st'>
                                <li>{data[index].company}</li>
                                <li>{data[index].new && <span>new</span>}</li>
                                <li>{data[index].featured && <span>featured</span>}</li>
                            </ul>
                        </div>
                        <div>
                            <h4>{data[index].position}</h4>
                            </div>
                        <div className='flexing'>
                            <ul id='nd'>
                            <li>{data[index].postedAt}</li>
                            <li>{data[index].contract}</li>
                            <li>{data[index].location}</li>
                            </ul>
                        </div>
                        
                        </div>
                    
                    
                    <div className='flexing2'>
                        <ul>
                            <li>{data[index].role}</li>
                            <li>{data[index].level}</li>
                            {data[index].languages.map((elem,index) =>  <li key={index}>{elem}</li>)}
                            {data[index].tools.map((elem,index) =>  <li key={index}>{elem}</li> )}
                        </ul>
                    </div>
                </div>


            </div>
            <button onClick={() => next()}>Next Dev</button>
            <button onClick={() => prev()}>Prev Dev</button>
        </div>
    )
}

export default Cards

