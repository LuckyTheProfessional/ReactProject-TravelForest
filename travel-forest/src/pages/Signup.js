import styles from './Signup.module.css';

//React Hooks
import { useState } from 'react';

//My Hooks
import useSignUp from '../hooks/useSignUp';

const Signup = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isPending, error, signUp } = useSignUp();

    const handleSubmit = (e) => {
        e.preventDefault();

        signUp(displayName, email, password);
    }

    return (
        <form className={styles.formBox} onSubmit={handleSubmit}>
            <h2>Create your account!</h2>

            <label>
                <span>Display name</span>
                <input type="text" 
                onChange={e => setDisplayName(e.target.value)}
                value={displayName}
                required
                />
            </label>
            <label>
                <span>Email address</span>
                <input type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                required
                />
            </label>
            <label className={styles.lastLabel}>
                <span>Password</span>
                <input type="password" 
                onChange={e => setPassword(e.target.value)}
                value={password}
                required
                />
            </label>

            {isPending && <button disabled>Creating account...</button>}
            {!isPending && <button>Sign up</button>}
            
            {error && <p>{error}</p>}
        </form>
    )
}

export default Signup
