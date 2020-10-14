import Axios from 'axios';
import React, {useState} from 'react';
import './App.css';
import Form from './Form'

// Initial States
  const initialFormValues = {
    username: '',
    email: '',
    password: '',
    terms: false
  }

  const initialFormErrors = {
    username: '',
    email: '',
    password: '',
    terms: false  
  }

  const initialUsers = []
  const initialDisabled = true;

function App() {
  // States
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  // Axios Post request
  const postNewUser = (newUser) => {
    Axios
      .post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res)
        setUsers([res.data, ...users])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const inputChange = (name, value) => {

  }

  const formSubmit = () => {
    const newUser = {
      
    }
  }

  return (
    <div className="App">
      <Form 
        values={formValues}
        errors={formErrors}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
      />
    </div>
  );
}

export default App;
