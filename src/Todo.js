import React , {useState} from 'react'
import './Todo.css';

const Todo = ({data,change}) => {
    const delet = (e) => {
        e.stopPropagation();
        change((prevState) => {
            const index = prevState.findIndex((elem)=>elem.id == data.id)
            const newState = [...prevState]
            newState.splice(newState[index].task,1);
            return newState;
        })
    }
    const edit = (e) => {
        e.stopPropagation()
        let edit = prompt('what you wenna change');
        change((prevState) => {
            const index = prevState.findIndex((elem)=>elem.id == data.id)
            const newState = [...prevState];
            newState[index].task = edit;
            return newState;
        })
    }
    const checkchange = () => {
        change((prevState) => {
            const index = prevState.findIndex((elem)=>elem.id == data.id)
            const newState = [...prevState];
            newState[index].checked = true;
            return newState;
        })
    }
    return (
        <div>
            <main>
                <div className='container' onClick={() => checkchange()} style={{backgroundColor : `${data.checked ? 'blue' : ''}`}}>
                    <p>{data.task}</p>
                    <div className='buttons'>
                    <button onClick={(e) => delet(e)}>delete</button>
                    <button onClick={(e) => edit(e)}>edit</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Todo
