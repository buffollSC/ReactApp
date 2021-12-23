import {useContext} from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import {AuthContext} from "../context";
import classes from './Login.module.css';

const Login = () => {
    const{isAuth, setIsAuth} = useContext(AuthContext)
    const login = () => {
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div className={classes.wraper}>
            <h1 className={classes.wraper_h}>Авторизация</h1>
            <form >
                <MyInput type = 'text' placeholder = 'Введите логин'/>
                <MyInput type = 'password' placeholder = 'Введите пароль'/>
                <MyButton onClick = {login}>Войти</MyButton>
            </form>
        </div>
    )
}
export default Login;