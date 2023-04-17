import {motion} from "framer-motion";
import styles from "./navigation.module.scss";
import {NavigationItem} from "@/components/Navigation/NavigationItem";
import {FC} from "react";

const variants = {
    open: {
        transition: {staggerChildren: 0.07, delayChildren: 0.2}
    },
    closed: {
        transition: {staggerChildren: 0.05, staggerDirection: -1}
    }
};
const navList = [
    {
        title: 'Главная', path: '#main'
    },
    {
        title: 'Обращение', path: '#treatment'
    },
    {
        title: 'Место и время', path: '#organization'
    },
    {
        title: 'Программа вечера', path: '#timetable'
    },
    {
        title: 'Пожелания', path: '#attention'
    },
    {
        title: 'Опросник', path: '#questions'
    },
    {
        title: 'Контакты', path: '#contacts'
    }, {
        title: 'Карта', path: '#map'
    }
]

interface NavigationProps {
    isOpen: boolean,
    onClick: () => void,
}

export const Navigation: FC<NavigationProps> = ({isOpen,onClick}) => {
    return (
        <motion.ul variants={variants} className={`${styles.list} ${isOpen ? '' : styles.none}`}>
            {navList.map(item => <NavigationItem key={item.title} onClick={onClick} title={item.title} path={item.path}/>)}
        </motion.ul>
    );
};