import { useState, useEffect} from 'react';
import { FormControl, Input } from '@material-ui/core';
import Message from './Message';
import './App.css';
import firebase from 'firebase';
import db from './firebase';
import FlipMove from 'react-flip-move';
import LOGO from './logo11.png';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})));
    });
  }, [])

  useEffect(() => {
    setUsername(prompt('Please Enter your name ')); 
  }, [])

  // console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
  }

  return (
    <div className="App">
      <img src={LOGO} className="logo"/>
      <h1>Messeger</h1> 
      <h2>Welcome, {username}!</h2>
      <form className="app__from">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder='Enter a message ...' value={input} onChange={event => setInput(event.target.value) }/>
          <IconButton className="app__iconButton" disabled={!input} variant="contained"
            color="primary"
            type='submit' onClick={sendMessage}>
              <SendIcon/>
           </IconButton>
        </FormControl>
      </form>

      <FlipMove className="filp__move">
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message}/>
        ))
      }
      <div className="app__div"></div>
      </FlipMove>
       

    </div>
  );
}

export default App;
