import React, {useState, useEffect} from 'react';
import { Input, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send'; 
import Message from './Message';
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'


function App() {
  const [input, setInput] = useState('')
  const [messeges, setMesseges] = useState([])
  const [name, setName] = useState("")

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestapm', 'desc')
    .onSnapshot((snapshot) => {
      setMesseges(snapshot.docs.map(doc => ({
        id:doc.id, 
        data: doc.data()
      })))
    })
  }, [])
  
  useEffect(() => {
    setName(getName())
  }, [])

  const getName = () => {
    const name = prompt('Enter your name')
    if (name === null ||!name.trim()) {
      return "Anonim"
    } else return name
  }

  const sendMessege = (event) => {
    event.preventDefault()

    db.collection('messages').add({
      name, 
      text: input,
      timestapm: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className="App">
      <h3>Hallo {name}</h3>

      <form className="app__form">
          <Input className="app__input" placeholder={'Enter a message'} type="text" value={input} onChange={e => setInput(e.target.value)}/>
          <IconButton 
          className="app__iconButton"
          disabled={!input}
          type='submit' 
          onClick={sendMessege} 
          variant="contained" 
          color="primary">
            <SendIcon/>
          </IconButton>
      </form>

      <FlipMove>
       {
         messeges.map(({id, data}) => (
          <Message key={id} curUser={name} username={data.name} message={data.text}/>
         ))
        }
      </FlipMove>
    </div>
  );
}

export default App;