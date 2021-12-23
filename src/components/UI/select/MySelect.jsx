import React from 'react'
import classes from './MySelect.module.css'
const MySelect = ({options, defaultValue, value, onChange}) => {
    return( 
        <div className={classes.wrapper_select}>
            <select 
                className={classes.select}
                value = {value}
                onChange={event => onChange(event.target.value)}
            >
            <option className={classes.select_option} disabled value="">{defaultValue}</option>
            {options.map((option) => 
                <option className={classes.select_option} key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
            </select>
        </div>
      
    )
}
export default MySelect;