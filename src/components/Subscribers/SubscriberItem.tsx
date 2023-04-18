import {FC} from "react";
import {Subscriber} from "@/models/models";
import styles from './subscriber.module.scss'

type Props = {
    subscriber: Subscriber
};
export const SubscriberItem: FC<Props> = ({subscriber}) => {
    return (
        <li className={`${styles.item} ${styles[subscriber.arrivement?.toLowerCase() || '']}`}>
            <ul className={`${styles.list} ${styles.list_little}`}>
                {subscriber.name.split(',').map(item => <li className={styles.property} key={item}>{item}</li>)}
            </ul>
            <div className={`${styles.list} ${styles.list_little}`}>
                {subscriber.alcohol.split(',').map(item => <li className={styles.property} key={item}>{item}</li>)}

            </div>
            <div className={styles.property}>
                {subscriber.arrivement}
            </div>
        </li>
    );
};