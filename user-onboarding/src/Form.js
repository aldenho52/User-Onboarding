import React from 'react'

export default function Form (props) {
    const {values, errors, change, submit, disabled} = props

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    const onChange = (event) => {
        const {name, type, value, checked} = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <div className='form'>
            <h1>Create an Account</h1>
            <form className='form-container' onSubmit={onSubmit}>
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
                
                <label className='label'>Role
                    <select onChange={onChange} value={values.role} name='role'>
                        <option value=''>----Select Your Role---</option>
                        <option value='Barbarian'>Barbarian</option>
                        <option value='Magician'>Magician</option>
                        <option value='Necromancer'>Necromancer</option>
                        <option value='Paladin'>Paladin</option>
                        <option value='Amazon'>Amazon</option>
                    </select>
                </label>
                
                <label className='label'>Server
                    <select onChange={onChange} value={values.server} name='server'>
                        <option value=''>----Select Your Server---</option>
                        <option value='US WEST'>US WEST</option>
                        <option value='US EAST'>US EAST</option>
                        <option value='EUROPE'>EUROPE</option>
                        <option value='ASIA'>ASIA</option>                        
                    </select>
                </label>

                
            <div>
                <label>Male
                        <input type='radio' name='gender' value='male' checked={values.gender === 'male'} onChange={onChange} />
                    </label>    
                    <label>Female
                        <input type='radio' name='gender' value='female' checked={values.gender === 'female'} onChange={onChange} />
                    </label>    
                    <label>Other
                        <input type='radio' name='gender' value='other' checked={values.gender === 'other'} onChange={onChange} />
                    </label>  
            </div>

                <label className='label'>Hell Mode
                    <input type='checkbox' name='hellmode' value={values.hellmode} onChange={onChange} />
                </label>

                <label className='label'>Terms
                    <input type='checkbox' name='terms' value={values.terms} onChange={onChange} />
                </label>

                <div className="errors">
                {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                    <div>{errors.role}</div>
                </div>
            
                <button disabled={disabled}>Submit</button>
            </form>
        </div>
    )
}