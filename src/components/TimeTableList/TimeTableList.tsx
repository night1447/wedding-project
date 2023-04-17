import {FC} from "react";
import {TIMETABLE} from "@/constants/general";
import {TimeTableItem} from "@/components/TimeTableList/TimeTableItem";
import styles from './timetable.module.scss'

export const TimeTableList: FC = () => {
    return (
        <ul className={styles.list}>
            {TIMETABLE.map((item, index) => <TimeTableItem key={item.value}
                                                           index={index}
                                                           isEdge={index === 0 || index === TIMETABLE.length - 1}
                                                           item={item}/>)}
        </ul>
    );
};