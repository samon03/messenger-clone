import { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import './App.css';

function App() {

  const [input, setInput] = useState('');

  const [messages, setMessages] = useState([]);

  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello world</h1> 

      <form>

      <FormControl>
        <InputLabel>Email address</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value) }/>
        <Button disabled={!input} variant="contained"
          color="primary"
          type='submit' onClick={sendMessage}>
            Send Message
        </Button>      
      </FormControl>
      </form>
      

      {
        messages.map(message => (
        <Message text={message}/>
        ))
      }
       

    </div>
  );
}

export default App;
