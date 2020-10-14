import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './Form'
import Schema from './Schema'
import * as yup from 'yup'
import User from './User'


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
        console.log('great success')
        console.log(res)
        setUsers([res.data, ...users])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
        console.log('Something went wrong mate')
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(Schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        console.log(err)
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

      setFormValues({
        ...formValues,
        [name]: value,
      })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    Schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <Form 
        values={formValues}
        errors={formErrors}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
      />
      <h2>Users</h2>
      {users.map((user) => {
        return <User key={user.id} details={user} />;
      })}
    </div>
  );
}

export default App;
