import styles from './Navbar.module.css';

import { Link } from 'react-router-dom';

// //React Hooks
import { useContext } from 'react';

// //Context
import { AuthContext } from '../context/AuthContext';

//My Hooks
import useLogOut from '../hooks/useLogOut';


const Navbar = () => {
    const { state } = useContext(AuthContext);
    const { logOut } = useLogOut();

    const handleLogout = () => {
      logOut();
    }

    return (
        <div className={styles.navbarBox}>
          <div className={styles.navbarInBox}>
            <div className={styles.title}>
              <Link to='/' style={{cursor: 'pointer', textDecoration: 'none'}}>
              <span className={styles.titleTravel}>travel</span>
              <span className={styles.titleForest}>forest</span>
              </ Link>
            </div>  
            <div className={styles.navbarControl}>
              {!state.user && (
                <>
                <p><Link to='/login'>Log in</Link></p>
                <p><Link to='/signup'>Sign up</Link></p>
                </>
              )}

              {state.user && (
                <>
                  <p className={styles.name}>Hi, {state.user.displayName}</p>
                  <button onClick={handleLogout}>Logout</button> 
                </>
              )}
            </div>  
          </div>
        </div>
    )
}

export default Navbar
