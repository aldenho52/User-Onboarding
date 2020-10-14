import React from 'react'

export default function Form (props) {
    const {values, errors, change, submit, disabled} = props

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    const onChange = (e) => {
        const {name, type, value, checked} = e.target 
    }

    return (
        <div>
            <h1>Create an Account</h1>
            <form className='form-container'>
                <label className='label'>Username
                    <input type='text' name='username' value={values.username} onChange={onChange}   />
                </label>
                <label className='label'>Email
                    <input type='email' name='email' value={values.email} onChange={onChange}   
                    />
                </label>
                <label className='label'>Password
                    <input type='text' name='password' value={values.password} onChange={onChange}   />
                </label>
                <label className='label'>Terms
                    <input type='checkbox' name='terms' value={values.terms} onChange={onChange} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}