import {FC, PropsWithChildren} from "react";
import styles from './main.module.scss'

export const Main: FC<PropsWithChildren> = ({children}) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
};