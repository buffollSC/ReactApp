import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';
import classes from './Navbar.module.css';
const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = (event) => {
        event.preventDefault()
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className={classes.navbar}> 
            <h2>ItRomjekeProjects</h2>
            <div className={classes.navbar_links}>
                <Link to='/about'> О сайте </Link>
                <Link to='/posts'> Посты </Link>
            </div>
            <div className={classes.navbar_butn}>
                <MyButton onClick = {logout}>Выйти</MyButton>
            </div>
        </div>
    )
}
export default Navbar;