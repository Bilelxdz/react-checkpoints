import React , { useState }  from 'react'
import './Add.css'
import { v4 as uuidv4 } from 'uuid';

const Addtodo = ({test}) => {
    const [input,setAdd] = useState();
    const inputAdd = (event) => {
        setAdd(event.target.value);
        //console.log(input);
    }
    const add = (e) => {
        e.preventDefault()
        test((prevState) => [...prevState,{'id': uuidv4(), 'task':input,'checked':false}]);
    }
    return (
        <div>
            <header>
                <h1>My to do list</h1>
                <form>
                    <input type='text' id='input' onChange={inputAdd}/>
                    <button onClick={(e)=>add(e)}>Add</button>
                    
                </form>
            </header>
        </div>
    )
}

export default Addtodo
