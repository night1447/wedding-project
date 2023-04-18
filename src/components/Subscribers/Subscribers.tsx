import {SubscriberHead} from "@/components/Subscribers/SubscriberHead";
import {SubscriberList} from "@/components/Subscribers/SubscriberList";
import {FC, useEffect, useState} from "react";
import styles from './subscriber.module.scss'
import axios from "axios";
import Image from "next/image";

export const Subscribers: FC = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        try {
            const response = axios.get(`api/getSubscribers`);
            response.then(data => {
                setData(data.data);
                setLoading(false);
            }).catch(e => {
                console.log(e);
            })
        } catch (e) {
            console.log(e);
        }
    }, [])
    return (
        loading ?
            <Image alt={'Загрузка'} src={'/Loading.gif'} width={600} height={600}/>
            :
            <div className={styles.wrapper}>
                <SubscriberHead/>
                <SubscriberList list={data}/>
            </div>
    );
};