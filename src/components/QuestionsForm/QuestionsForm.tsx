import styles from "./questions.module.scss";
import {Label} from "@/components/UI/Label/Label";
import {RadioButton} from "@/components/UI/RadioButton/RadioButton";
import {ALCHO_ANSWERS} from "@/constants/general";
import {Checkbox} from "@/components/UI/Checkbox/Checkbox";
import {Button} from "@/components/UI/Button/Button";
import * as React from "react";
import {FC, useState} from "react";
import {UsersList} from "@/components/UsersList/UsersList";
import {Users} from "@/models/models";
import {Message} from "@/components/UI/Message/Message";
import {AnimatePresence} from "framer-motion";
import axios from "axios";

interface QuestionsProps {
    people: Users
}

type IChecked = string[]
type IAnswer = "Yes" | "No" | "idk";
const answerInitialState: IAnswer = "Yes";
const checkedInitialState: IChecked = [];
const MessageSettings = {
    error: {
        title: 'Ошибка!',
        description: 'Что-то пошло не так попробуйте еще раз!'
    },
    success: {
        title: 'Отправлено!',
        description: 'Спасибо за обратную связь, ваши данные записаны'
    }
}

export const QuestionsForm: FC<QuestionsProps> = ({people}) => {
    const [activeList, setActiveList] = useState(people.people);
    const [checked, setChecked] = useState<IChecked>(checkedInitialState);
    const [answer, setAnswer] = useState<IAnswer>(answerInitialState);
    const [showMessage, setShowMessage] = useState(false);
    const [error, setError] = useState(false);
    const submitFormHandler = async (e: React.FormEvent) => {
        try {

            e.preventDefault();
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 4000);
            const resultedAnswer = {
                alcohol: checked.join(','),
                name: activeList.map(item => item.name + ' ' + item.surname).join(', '),
                arrivement: answer,
                id: people.id,
            }
            const sendData = await axios.post('/api/sendAnswer', resultedAnswer);
        } catch (e) {
            setError(true);
        }

    };
    const changeAnswerHandler = (data: IAnswer) => {
        setAnswer(data);
    }

    const changeCheckedHandler = (item: string) => {
        if (checked.includes(item)) {
            setChecked(prevState => prevState.filter(check => check !== item));
        } else {
            setChecked(prevState => [...prevState, item]);
        }
    };

    return (
        <form className={styles.blocks} onSubmit={submitFormHandler}>
            <fieldset className={styles.block} name={'coming'}>
                <h4 className={styles.subtitle}>Вы придете?</h4>
                {people.people?.length > 1 ? <><UsersList users={people.people} setActiveList={setActiveList}
                                                         activeList={activeList}/>
                        <p className={styles.hint}>*Если хотите убрать человека нажмите на галочку</p>
                    </> :
                    <ul className={styles.answers}>
                        <li className={styles.answer}>
                            <Label id={'el-1'} text={'Да'}>
                                <RadioButton id={'el-1'} name={'arrival'} required={true}
                                             onChange={() => changeAnswerHandler("Yes")}/>
                            </Label>
                        </li>
                        <li className={styles.answer}>
                            <Label id={'el-2'} text={'Нет'}>
                                <RadioButton id={'el-2'} name={'arrival'} required={true}
                                             onChange={() => changeAnswerHandler("No")}/>
                            </Label>
                        </li>
                        <li className={styles.answer}>
                            <Label id={'el-3'} text={'Пока не могу ответить'}>
                                <RadioButton id={'el-3'} name={'arrival'} required={true}
                                             onChange={() => changeAnswerHandler("idk")}/>
                            </Label>
                        </li>
                    </ul>}
            </fieldset>
            <fieldset className={styles.block} name={'alcho'}>
                <h4 className={styles.subtitle}>Какой алкоголь вы предпочитаете?</h4>
                <ul className={styles.answers}>
                    {ALCHO_ANSWERS.map((item, index) => <li key={item} className={styles.answer}>
                        <Label id={`checkbox-${index}`} text={item}>
                            <Checkbox id={`checkbox-${index}`} name={'checked'} required={false}
                                      onChange={() => changeCheckedHandler(item)}/>
                        </Label>
                    </li>)}
                </ul>
            </fieldset>
            <AnimatePresence
                initial={false}
                mode={"wait"}
                onExitComplete={() => null}
            >
                {showMessage &&
                    <Message message={error ? MessageSettings.error.description : MessageSettings.success.description}
                             title={error ? MessageSettings.error.title : MessageSettings.success.title}
                             type={error ? 'error' : 'success'}/>}
            </AnimatePresence>

            <Button type={'submit'}>
                Подтвердить
            </Button>
        </form>
    );
};