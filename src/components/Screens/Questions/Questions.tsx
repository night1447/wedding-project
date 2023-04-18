import {WrapperSection} from "@/components/WrapperSection/WrapperSection";
import styles from './questions.module.scss'
import * as React from "react";
import {FC} from "react";
import {QuestionsForm} from "@/components/QuestionsForm/QuestionsForm";
import {Users} from "@/models/models";
import {Title} from "@/components/UI/Title/Title";

interface QuestionsProps {
    people: Users
}

const Questions: FC<QuestionsProps> = ({people}) => {
    return (
        <WrapperSection sectionClass={styles.questions} id={'questions'}>
            <Title className={styles.title}>Пожалуйста пройдите небольшой опрос</Title>
            <QuestionsForm people={people}/>
        </WrapperSection>
    );
};
export default Questions;