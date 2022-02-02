import styles from './Login.module.css';

//React Hooks
import { useState } from 'react';

//My Hooks
import useLogIn from '../hooks/useLogIn';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isPending, error, logIn } = useLogIn();

    const handleSubmit = (e) => {
        e.preventDefault();

        logIn(email, password);
    }

    return (
        <form className={styles.formBox} onSubmit={handleSubmit}>
            <h2>Log into your account!</h2>

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

            {!isPending && <button>LOG IN</button>}
            {isPending && <button disabled>Logging in...</button>}

            {error && <p>{error}</p>}
        </form>
    )
}

export default Login
