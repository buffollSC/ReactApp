import React, { useDebugValue } from 'react';
import classes from './MyInput.module.css';
const MyInput = ({...props}) => {
    return(
        
        <input {...props} className={classes.MyInp}>
        
        </input>
    )
}

export default MyInput;