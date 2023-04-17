import {FC} from "react";
import styles from './error.module.scss'
import Image from "next/image";
import ErrorImage from '../../../public/error.gif'

export const Error: FC = () => {
    return (
        <div className={styles.error}>
            <Image alt={"Ошибка"} src={ErrorImage} height={500} width={500} className={styles.img}/>
        </div>
    );
};