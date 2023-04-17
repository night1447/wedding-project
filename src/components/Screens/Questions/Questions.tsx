import {WrapperSection} from "@/components/WrapperSection/WrapperSection";
import styles from './questions.module.scss'
import * as React from "react";
import {FC} from "react";
import {QuestionsForm} from "@/components/QuestionsForm/QuestionsForm";
import {Users} from "@/models/models";

interface QuestionsProps {
    people: Users
}

export const Questions: FC<QuestionsProps> = ({people}) => {
    return (
        <WrapperSection sectionClass={styles.questions}>
            <h2 className={styles.title} id={'questions'}>Пожалуйста пройдите небольшой опрос</h2>
            <QuestionsForm people={people}/>
        </WrapperSection>
    );
};