import { useState } from 'react';
import './App.css';

function App() {

  const [titleBar, setTitleBar] = useState('')
  const [contextBar, setContextBar] = useState('')
  const [toDos, setToDos] = useState([{
    id: 1,
    isDone: false,
    isDelete: false,
    title: 'This is the first title!',
    context: 'This is the first context!'
  }])

  const handleAdd = () => {
    if(titleBar.trim()==''||contextBar.trim()==''){
      alert('Please input the title and the context!')
    }else{
      setToDos(
        [...toDos, {
        id: toDos.length + 1,
        isDone: false,
        isDelete: false,
        title: titleBar,
        context: contextBar,
      }])
      setTitleBar('')
      setContextBar('')
    }  
  }

  const handleDelete = (x) => {
    setToDos(
      toDos.map((toDo) => {
        if (toDo.id == x) {
          return ({ ...toDo, isDelete: true })
        }
        return toDo
      })
    )
  }

  const handleDone = (x) => {
    setToDos(
      toDos.map((toDo) => {
        if (toDo.id == x) {
          return ({ ...toDo, isDone: true })
        }
        return toDo
      })
    )
  }

  const handleCancel = (x) => {
    setToDos(
      toDos.map((toDo) => {
        if (toDo.id == x) {
          return ({ ...toDo, isDone: false })
        }
        return toDo
      })
    )
  }

  return (
    <div>
      <div className='head'>
        <div className='very-top'>My To Do List<span className='right'>React</span></div>

        <div className='top'>
          <label className='label-text'>Title:</label>
          <input className='input-bar' type='text' onChange={(event) => {
            setTitleBar(event.target.value)
          }} value={titleBar}></input>
          <label className='label-text'>Context:</label>
          <input className='input-bar' type='text' onChange={(event) => {
            setContextBar(event.target.value)
          }} value={contextBar}></input>
          <span className='right'>
            <button className='add-button' onClick={handleAdd}>Add</button>
          </span>
        </div>
      </div>

      <div className='body'>
        <div>
          <h2>Working..🔥</h2>
          <div className='container'>
            {toDos.map((toDo) => {
              if (toDo.isDelete === false && toDo.isDone === false) {
                return (
                  <div className='box' key={toDo.id}>
                    <h2 className='title'>{toDo.title}</h2>
                    <p className='context'>{toDo.context}</p>
                    <p>
                      <button className='red-button' onClick={() => handleDelete(toDo.id)}>Delete</button>
                      <button className='green-button' onClick={() => handleDone(toDo.id)}>Done</button>
                    </p>
                  </div>
                )
              } return null
            })}
          </div>
        </div>
        <div>
          <h2>Done..!🎉</h2>
          <div className='container'>
            {toDos.map((toDo) => {
              if (toDo.isDelete === false && toDo.isDone === true) {
                return (
                  <div className='box' key={toDo.id}>
                    <h2 className='title'>{toDo.title}</h2>
                    <p className='context'>{toDo.context}</p>
                    <p>
                      <button className='red-button' onClick={() => handleDelete(toDo.id)}>Delete</button>
                      <button className='green-button' onClick={() => handleCancel(toDo.id)}>Cancel</button>
                    </p>
                  </div>
                )
              } return null
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
