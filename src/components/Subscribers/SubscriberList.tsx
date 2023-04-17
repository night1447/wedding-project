import {FC} from "react";
import {Subscriber} from "@/models/models";
import {SubscriberItem} from "@/components/Subscribers/SubscriberItem";
import styles from './subscriber.module.scss'

interface SubscriberListProps {
    list: Subscriber[]
}

export const SubscriberList: FC<SubscriberListProps> = ({list}) => {
    return (
        <ul className={styles.list}>
            {list.map(subscriber => <SubscriberItem key={subscriber.id} subscriber={subscriber}/>)}
        </ul>
    );
};