import {SubscriberHead} from "@/components/Subscribers/SubscriberHead";
import {SubscriberList} from "@/components/Subscribers/SubscriberList";
import {FC} from "react";
import {Subscriber} from "@/models/models";
import styles from './subscriber.module.scss'

interface SubscribersProps {
    data: Subscriber[]
}

export const Subscribers: FC<SubscribersProps> = ({data}) => {
    return (
        <div className={styles.wrapper}>
            <SubscriberHead/>
            <SubscriberList list={data}/>
        </div>
    );
};