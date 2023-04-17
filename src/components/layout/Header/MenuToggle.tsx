import * as React from "react";
import {FC} from "react";
import styles from './header.module.scss'

interface MenuToggleProps {
    toggle: () => void,
    className?: string,
}

export const MenuToggle: FC<MenuToggleProps> = ({toggle, className}) => (
    <button onClick={toggle} type={"button"} className={`${styles.button} ${className || ''}`}>
        <span></span>
        <span></span>
        <span></span>
    </button>
);
