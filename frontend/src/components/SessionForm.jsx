import { useDispatch } from 'react-redux';
import './SessionForm.css';
import { useState } from 'react';
import { createUser, loginUser } from '../store/sessionReducer';
import {  useNavigate } from 'react-router-dom';

const SessionForm = ({sessionState}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        if (sessionState === 'Signup') {
          dispatch(createUser({ email, password }))
            .then((data)=> navigate(`/users/${data.id}`))
            .catch(async res =>{
              let data = await res.json();
              setErrors(data);
            });
        } else {
          dispatch(loginUser({ email, password }))
            .then((data)=> navigate(`/users/${data.id}`))
            .catch(async res => {
              let data = await res.json();
              setErrors(data.errors);
            });
        }
      };
      const handleDemoLogin = e =>{
        e.preventDefault();
        dispatch(loginUser({email:'abcde@email.com', password:'password'}))
          .then((data)=> navigate(`/users/${data.id}`))
      }
    return (
        <>
            <div className='session-content'>
                <h2>{sessionState}</h2>
                <form onSubmit={handleSubmit}>
                  <label >Email:</label>
                  <input
                    placeholder='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <label >Password:</label>
                  <input
                    placeholder='Password'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                <input type='submit' value={sessionState} />
                {sessionState === 'Login' && <button className='demo-login' onClick={handleDemoLogin}>Demo Login</button>}
                </form>
                {errors.map((err, idx) => (<p key={idx}>{err}</p>))}
            </div>
        </>
    );
};

export default SessionForm
