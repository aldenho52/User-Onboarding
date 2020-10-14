import React, {useState} from 'react';
import './App.css';
import Form from './Form'

function App() {
  const initialFormValues = {

  }

  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
