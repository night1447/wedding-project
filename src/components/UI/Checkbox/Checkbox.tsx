import {FC} from 'react';
import styles from './checkbox.module.scss'

type CheckboxProps = {
    id: string,
    className?: string,
    onChange?: () => void,
    name: string,
    required: boolean
};
export const Checkbox: FC<CheckboxProps> = ({id, name, onChange, required}) => {
    return (
        <span className={styles.checkbox}>
            <input type="checkbox" id={id} className={styles.input} name={name} onChange={onChange}
                   required={required}/>
            <span className={styles.checked}></span>
        </span>
    );
};