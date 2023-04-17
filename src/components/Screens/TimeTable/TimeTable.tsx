import {FC} from "react";
import {WrapperSection} from "../../WrapperSection/WrapperSection";
import {TimeTableList} from "@/components/TimeTableList/TimeTableList";
import styles from './timetable.module.scss'

export const TimeTable: FC = () => {
    return (
        <WrapperSection sectionClass={styles.timetable} id={'timetable'}>
            <h2 className={styles.title}>Программа вечера</h2>
            <TimeTableList/>
        </WrapperSection>
    );
};