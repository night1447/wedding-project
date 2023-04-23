import {FC, useEffect, useState} from "react";
import {DATE} from "@/constants/date";
import styles from './timer.module.scss'
import {clearInterval} from "timers";
import {motion} from "framer-motion";

type TimerType = {
    weeks: number,
    days: number,
    minutes: number,
    seconds: number,
    hours: number,
}
const initialState: TimerType = {
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
}
export const Timer: FC = () => {
        const [timeRemaining, setTimeRemaining] = useState(initialState);
        const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
        const calculateTimeRemaining = () => {
            const currentTime = Date.now();
            const difference = new Date(DATE.year, DATE.month - 1, DATE.day, 0, 0).getTime() - currentTime;

            if (difference > 0) {
                const total = Math.floor(difference / 1000);
                let days = Math.floor(total / (60 * 60 * 24));
                const hours = Math.floor(total / (60 * 60) % 24);
                const minutes = Math.floor(total / 60 % 60);
                const seconds = Math.floor(total % 60);
                const weeks = Math.floor(days / 7);
                days = days - weeks * 7;

                setTimeRemaining({weeks, days, hours, minutes, seconds});
            } else {
                clearInterval(timerId as NodeJS.Timer);
            }
        };

        useEffect(() => {
            calculateTimeRemaining();
            const timer = setInterval(() => calculateTimeRemaining(), 1000);
            setTimerId(timer);
        }, []);


        return (
            <motion.ul className={styles.blocks}
                       initial={{x: 0, y: 300, opacity: 0}}
                       animate={{x: 0, y: 0, opacity: 1}}
                       transition={{type: "spring", stiffness: 15}}>
                <li className={styles.block}>
                <span className={styles.value}>
                    {timeRemaining.weeks}
                </span>
                    недель
                </li>
                <li className={styles.block}>
                <span className={styles.value}>
                    {timeRemaining.days}
                </span>
                    дней
                </li>
                <li className={styles.block}>
                <span className={styles.value}>
                    {timeRemaining.hours}
                </span>
                    часов
                </li>
                <li className={styles.block}>
                <span className={styles.value}>
                    {timeRemaining.minutes}
                </span>
                    минут
                </li>
                <li className={styles.block}>
                <span className={styles.value}>
                    {timeRemaining.seconds}
                </span>
                    секунд
                </li>
            </motion.ul>
        );
    }
;