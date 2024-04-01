import { useDispatch, useSelector } from 'react-redux';
import './SessionForm.css';
import { useState } from 'react';
import { createUser, loginUser, selectCurrentUser } from '../store/sessionReducer';
import { useNavigate } from 'react-router-dom';

const SessionForm = ({sessionState}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        if (sessionState === 'signup') {
          dispatch(createUser({ email, password, heading: "Needs a heading", openToWork:"false" }))
            .then(()=> navigate(`/users/${useSelector(selectCurrentUser).id}`))
            .catch(async res =>{
              let data = await res.json();
              setErrors(data);
            });
        } else {
          dispatch(loginUser({ email, password }))
            .then(()=> navigate(`/users/${useSelector(selectCurrentUser).id}`))
            .catch(async res => {
              let data = await res.json();
              setErrors(data.errors);
            });
        }
      };
    return (
        <>
            <div className='session-content'>
                <h2>{sessionState}</h2>
                <form onSubmit={handleSubmit}>
                <input
                    placeholder='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    placeholder='Password'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input type='submit' value={sessionState} />
                </form>
                {errors.map((err, idx) => (<p key={idx}>{err}</p>))}
            </div>
        </>
    );
};

export default SessionForm
