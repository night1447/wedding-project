import {FC} from "react";
import styles from './radio.module.scss'

type RadioButtonProps = {
    onChange?: () => void,
    id: string,
    name: string,
    required: boolean,
};
export const RadioButton: FC<RadioButtonProps> = ({id, name,required,onChange}) => {
    return (
        <span className={styles.radioButton}>
            <input type="radio" name={name} id={id} className={styles.radio} required={required} onChange={onChange}/>
            <span className={styles.checked}></span>
        </span>
    );
};