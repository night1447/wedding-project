// @flow
import * as React from 'react';
import {FC, PropsWithChildren} from 'react';
import styles from './button.module.scss'
import {motion} from "framer-motion";


type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    className?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
};
const buttonVariants = {
    rest: {
        backgroundColor: "var(--white)",
        color: "var(--black)",
        boxShadow: "0px 4px 10px rgba(rgba(39, 39, 39, 0.2)",
        scale: 1,
    },
    hover: {
        backgroundColor: "var(--pink)",
        color: "var(--black)",
        boxShadow: "0px 8px 10px rgba(rgba(39, 39, 39, 0.4)",
        scale: 1.05,
    },
    tap: {
        backgroundColor: "var(--black)",
        color: "var(--white)",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
        scale: 0.95,
    },
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({type, children, className, onClick}) => {
    return (
        <motion.button
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            type={type} className={`${styles.button} ${className || ''}`
        }
            onClick={onClick}>
            {children}
        </motion.button>
    );
};