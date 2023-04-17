import {FC} from "react";
import {TimeTableType} from "@/constants/general";
import Image from "next/image";
import styles from './timetable.module.scss'
import {FLOWERS} from "@/constants/flowers";

interface TimeTableProps {
    item: TimeTableType,
    index: number,
    isEdge: boolean,
}

export const TimeTableItem: FC<TimeTableProps> = ({item, index, isEdge}) => {
    return (
        <li className={styles.item}>
            <div className={styles.time}>
                {item.time}
            </div>
            <div className={styles.inner}>{isEdge ? <div className={styles.dot}></div> :
                <Image src={FLOWERS[index]} alt={'Цветок'} className={styles.image}/>}</div>
            <div className={styles.shell}>
                <h4 className={styles.subtitle}>{item.value}</h4>
                <p className={styles.description}>{item.description}</p>
            </div>
        </li>
    );
};