import React from 'react';
import classes from "./ButtonCatalog.module.css";

const ButtonCatalog = ({children, ...props}) => {
    return (
        <button {...props} className={classes.ButtonCatalog}>
            {children}
        </button>
    );
};

export default ButtonCatalog;