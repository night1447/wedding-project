import {SubscriberHead} from "@/components/Subscribers/SubscriberHead";
import {SubscriberList} from "@/components/Subscribers/SubscriberList";
import {FC, useEffect, useState} from "react";
import styles from './subscriber.module.scss'
import axios from "axios";
import {Loading} from "@/components/Loading/Loading";

export const Subscribers: FC = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        try {
            const response = axios.get(`api/getSubscribers`);
            response.then(data => {
                setData(data.data);
                setLoading(false);
            })
        } catch (e) {
        }
    }, [])
    return (
        loading ?
            <Loading/>
            :
            <div className={styles.wrapper}>
                <SubscriberHead/>
                <SubscriberList list={data}/>
            </div>
    );
};