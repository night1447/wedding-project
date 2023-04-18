import {FC} from "react";
import {WrapperSection} from "../../WrapperSection/WrapperSection";
import {TimeTableList} from "@/components/TimeTableList/TimeTableList";
import styles from './timetable.module.scss'
import {Title} from "@/components/UI/Title/Title";

export const TimeTable: FC = () => {
    return (
        <WrapperSection sectionClass={styles.timetable} id={'timetable'}>
            <Title className={styles.title}>Программа вечера</Title>
            <TimeTableList/>
        </WrapperSection>
    );
};