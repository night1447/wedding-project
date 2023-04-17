import {FC} from 'react';
import {Portal} from "@/components/UI/Portal/Portal";
import styles from './message.module.scss'
import {motion} from "framer-motion";

type MessageProps = {
    message: string,
    onClose?: () => void,
    title: string
    type: "success" | "error"
};
const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.5,
            type: "spring",
            damping: 35,
            stiffness: 100,
        },
    },
    exit: {
        y: "-100vh",
        opacity: 0,
        transition: {
            duration: 0.5,
            type: "spring",
            damping: 35,
            stiffness: 100,
        },
    },
};

export const Message: FC<MessageProps> = ({type, title, message}) => {

    return (

        <Portal id={'message'}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`${styles.message} ${styles[type]}`}>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{message}</p>
                </div>
            </motion.div>
        </Portal>
    );
};