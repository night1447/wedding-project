// @flow
import * as React from 'react';
import {FC, PropsWithChildren} from 'react';
import styles from './label.module.scss'

type LabelProps = {
    text: string,
    id: string,
    className?: string
};
export const Label: FC<PropsWithChildren<LabelProps>> = ({text, id, children, className}) => {
    return (
        <label htmlFor={id} className={`${styles.label} ${className || ''}`}>
            {children}
            {text}
        </label>
    );
};