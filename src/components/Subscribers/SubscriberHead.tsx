import {FC} from "react";
import styles from './subscriber.module.scss'

const property: string[] = ['Кто придет', 'Предпочтения', 'Придет/не придет']
export const SubscriberHead: FC = () => {
    return (
        <ul className={styles.head}>
            {property.map(item => <li key={item} className={styles.property}>{item}</li>)}
        </ul>
    );
};